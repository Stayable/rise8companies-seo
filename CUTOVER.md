# DNS cutover — rise8companies.com → Vercel

How to move the website from the SiteGround/WordPress site to this Next.js app on
Vercel **without breaking RISE8 email**.

> Do not run any of this until the content flags in `REVIEW.md` are resolved and
> Rob has approved the preview. The cutover itself takes ~10 minutes; the risk is
> entirely in doing it before the site is ready, or in touching the wrong record.

---

> The complete zone — all 26 records, classified by what may and may not be
> touched — is in **`snapshot/dns-zone.md`**. Read it before opening the editor.

## 1. Verified current state (checked 2026-08-14 against 8.8.8.8)

| Record | Current value | Change at cutover? |
|---|---|---|
| Nameservers | `ns1.siteground.net`, `ns2.siteground.net` | **No** — DNS stays at SiteGround |
| `rise8companies.com` A | `34.174.186.164` (SiteGround/GCP) | **Yes** → Vercel |
| `www` A | `34.174.186.164` | **Yes** → Vercel |
| `invest` CNAME | `d89971b15d3ca49f.vercel-dns-017.com` | **No** — already on Vercel (investor portal) |
| MX | `rise8companies-com.mail.protection.outlook.com` (pref 0) | **No — never touch** |
| SPF TXT | `v=spf1 include:spf.protection.outlook.com include:adobesign.com -all` | **No** |
| DMARC TXT (`_dmarc`) | `v=DMARC1; p=quarantine; sp=quarantine; adkim=s; aspf=s; pct=100; rua=mailto:dmarc-reports@rise8companies.com; fo=1` | **No** |
| `autodiscover` CNAME | `autodiscover.outlook.com` | **No** |
| Verification TXT | `google-site-verification=…`, `apple-domain-verification=…`, `anthropic-domain-verification-…` | **No** |

**Email is Microsoft 365.** The MX, SPF, DMARC, and autodiscover records above are
what keep it working. Vercel serves the web front end only and needs none of them.

**Do not switch the nameservers to Vercel.** That would move authority for the
whole zone and drop every record not replicated there — including MX. The A/CNAME
edit below is the entire job.

**Four other records also point at SiteGround** — `mail`, `autoconfig`, `ftp`, and
`ssh`, all `A` → `34.174.186.164`. **Leave every one of them alone on cutover day**:
rollback depends on SiteGround still serving, and `ftp`/`ssh` are how you reach it.
They become a problem only later — see §8.

---

## 2. Two days before

1. In SiteGround DNS, lower the **TTL on the apex A record and the `www` record**
   to `300` (5 minutes). Leave the values themselves alone. This shortens the
   window where some resolvers still see WordPress after the switch.
2. Confirm the preview build is approved (see `REVIEW.md`).
3. Take a final backup/export of the WordPress site. Do not delete it — leave the
   SiteGround site running so you can revert by pointing DNS back.

---

## 3. Attach the domain in Vercel — DONE 2026-08-14

```bash
npx vercel domains add rise8companies.com rise8companies-seo      # done
npx vercel domains add www.rise8companies.com rise8companies-seo  # done
```

Both are now on project `rise8companies-seo`; `invest.rise8companies.com` stays on
`investor-portal`, verified unchanged. Vercel reports "not configured properly"
until step 5 — expected, and nothing about the live site changed.

Still to decide: whether `www` redirects to the apex or the reverse, so only one
hostname is canonical. Set it in **Settings → Domains** before or just after the flip.

---

## 4. Promote the build to production — DONE 2026-08-14

```bash
npm run build
npx vercel --prod   # dpl_EXRZZF6vqidsEsLxXJs9Ze3jqw96
```

Serving at `https://rise8companies-seo.vercel.app`, waiting on DNS.

---

## 5. Flip the two DNS records at SiteGround — THE ONLY STEP LEFT

**Site Tools → Domain → DNS Zone Editor** for `rise8companies.com`.

Change the **value** of these two rows. Do not change their type, do not delete and
recreate them:

| Name | Type | Old value | New value |
|---|---|---|---|
| `rise8companies.com` | A | `34.174.186.164` | `76.76.21.21` |
| `www.rise8companies.com` | A | `34.174.186.164` | `76.76.21.21` |

Notes:
- `76.76.21.21` is what `vercel domains inspect` returns for **both** names. A
  CNAME to `cname.vercel-dns.com` on `www` also works, but keeping both as A
  records means two value edits rather than a delete-and-recreate — fewer ways to
  get it wrong, and the apex has to be an A record regardless.
- Re-confirm the IP in the Vercel dashboard at the moment you make the change
  rather than trusting this file.
- **Do not touch any other row in the zone** — all 26 are classified in
  `snapshot/dns-zone.md`. In particular leave MX, SPF, `_dmarc`, `autodiscover`,
  both `_domainkey` selectors, the Teams SRV/CNAME set, and `invest` alone.

---

## 6. Verify (within ~15 minutes)

```bash
# Web now points at Vercel
nslookup -type=A rise8companies.com 8.8.8.8          # expect 76.76.21.21
nslookup -type=CNAME www.rise8companies.com 8.8.8.8  # expect cname.vercel-dns.com

# Email is untouched — these must be IDENTICAL to section 1
nslookup -type=MX rise8companies.com 8.8.8.8
nslookup -type=TXT rise8companies.com 8.8.8.8
nslookup -type=TXT _dmarc.rise8companies.com 8.8.8.8
nslookup -type=CNAME autodiscover.rise8companies.com 8.8.8.8

# Investor portal still resolves to its own Vercel project
nslookup -type=CNAME invest.rise8companies.com 8.8.8.8
```

Then, by hand:
- Load `https://rise8companies.com` and `https://www.rise8companies.com` — both
  should serve the new site over a valid certificate (Vercel issues it
  automatically once DNS resolves; allow a few minutes).
- Spot-check the 301s: `/about-us`, `/investors`, `/contact-us`, `/safety-manual`
  should all land on the new site, not a 404.
- **Send a test email to and from a `@rise8companies.com` address.** This is the
  one check that matters most. Do it before you walk away.
- Confirm `https://invest.rise8companies.com/` still loads.

---

## 7. Rollback

If anything is wrong, revert the two records to `34.174.186.164` at SiteGround.
With TTL at 300 the old WordPress site is back within about 5 minutes. Because the
SiteGround site was never modified, there is nothing else to undo.

---

## 8. After the dust settles (a week)

- Raise the TTLs back to `3600`.
- Update the property URL in Google Search Console / Bing if needed; submit the new
  sitemap.
- Only then consider decommissioning the SiteGround WordPress install — and keep
  the export.

### And when SiteGround is actually cancelled — do not skip this

Delete the four leftover `A` records: `mail`, `autoconfig`, `ftp`, `ssh`. Each still
points at `34.174.186.164`. Once the host reassigns that IP, whoever receives it
inherits four live hostnames on the RISE8 domain — a textbook subdomain-takeover
setup, and the kind of thing that gets found by scanners long before it gets found
by us.

Two of them are worth checking even sooner:

- **`mail.rise8companies.com`** points at SiteGround while mail actually runs on
  Microsoft 365. Any client still configured against that hostname is talking to the
  wrong server.
- **`autoconfig.rise8companies.com`** serves SiteGround's client-setup settings.
  Microsoft's equivalent, `autodiscover`, is configured correctly — this one is a
  leftover that can hand out wrong mail settings.
