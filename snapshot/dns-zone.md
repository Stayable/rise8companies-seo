# rise8companies.com — DNS zone inventory

**Captured 2026-08-14** from the SiteGround DNS Zone Editor, with every truncated
value re-resolved against `8.8.8.8` rather than transcribed from the screen.

- **Authority:** `ns1.siteground.net`, `ns2.siteground.net` — the zone is managed at
  SiteGround. It does **not** move to Vercel.
- **Web host:** SiteGround / Google Cloud at `34.174.186.164`.
- **Email:** Microsoft 365 (tenant `leadmanagement.onmicrosoft.com`).

---

## 1. Change at cutover — exactly two rows

| Name | Type | Current | New |
|---|---|---|---|
| `rise8companies.com` | A | `34.174.186.164` | `76.76.21.21` |
| `www.rise8companies.com` | A → CNAME | `34.174.186.164` | `cname.vercel-dns.com` |

Nothing else in the zone changes on cutover day.

---

## 2. Never touch — email and identity

Breaking any of these breaks RISE8 email, Teams, or device enrolment.

| Name | Type | Value | What it does |
|---|---|---|---|
| `rise8companies.com` | MX | `rise8companies-com.mail.protection.outlook.com` | **Inbound mail — Microsoft 365** |
| `rise8companies.com` | TXT | `v=spf1 include:spf.protection.outlook.com include:adobesign.com -all` | SPF: M365 + Adobe Sign |
| `_dmarc` | TXT | `v=DMARC1; p=quarantine; sp=quarantine; adkim=s; aspf=s; pct=100; rua=mailto:dmarc-reports@rise8companies.com; fo=1` | DMARC, strict alignment |
| `autodiscover` | CNAME | `autodiscover.outlook.com` | Outlook client auto-setup |
| `selector1._domainkey` | CNAME | `selector1-rise8companies-com._domainkey.leadmanagement.onmicrosoft.com` | M365 DKIM |
| `selector2._domainkey` | CNAME | `selector2-rise8companies-com._domainkey.leadmanagement.onmicrosoft.com` | M365 DKIM |
| `sip` | CNAME | `sipdir.online.lync.com` | Teams / Skype for Business |
| `lyncdiscover` | CNAME | `webdir.online.lync.com` | Teams client discovery |
| `_sip._tls` | SRV | `sipdir.online.lync.com:443` (pri 100, w 1) | Teams signalling |
| `_sipfederationtls._tcp` | SRV | `sipfed.online.lync.com:5061` (pri 100, w 1) | Teams federation |
| `enterpriseregistration` | CNAME | `enterpriseregistration.windows.net` | Entra device registration |
| `enterpriseenrollment` | CNAME | `enterpriseenrollment.manage.microsoft.com` | Intune enrolment |

## 3. Never touch — transactional email (`send.` subdomain)

Separate sending identity on its own subdomain, so its SPF does not conflict with
the apex record above.

| Name | Type | Value |
|---|---|---|
| `send` | MX | `feedback-smtp.us-east-1.amazonses.com` (pri 10) |
| `send` | TXT | `v=spf1 include:amazonses.com ~all` |
| `resend._domainkey` | TXT | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCq+bs811Jjx2…` |

## 4. Never touch — verification & other services

| Name | Type | Value |
|---|---|---|
| `invest` | CNAME | `d89971b15d3ca49f.vercel-dns-017.com` — **investor portal, already on Vercel** |
| `rise8companies.com` | TXT | `google-site-verification=Hz_MjIz-HJNdfv395bi1yBCjcLwxs-AsWDiLwaugMbo` |
| `rise8companies.com` | TXT | `apple-domain-verification=j3TJEfGM1QNibrEm` |
| `rise8companies.com` | TXT | `anthropic-domain-verification-vxzeyk=SznxXuqXt833Ot7m3Gg5UmdPv` |
| `1522905413783._domainkey` | TXT | `k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCr6KM…` — **unidentified sender** |

---

## 5. Needs attention — four records still pointing at SiteGround

These are **not** part of the cutover, but they are the loose ends it creates. All
four resolve to `34.174.186.164`.

| Name | Type | Purpose | Verdict |
|---|---|---|---|
| `mail` | A | Legacy mail hostname | Mail is Microsoft 365, so this points at the wrong server. Anyone whose client is configured against `mail.rise8companies.com` is talking to SiteGround. Check before removing. |
| `autoconfig` | A | Thunderbird / Mozilla client auto-setup | Microsoft uses `autodiscover`, which is set correctly. This one serves SiteGround's settings. Likely safe to remove after checking. |
| `ftp` | A | SiteGround file access | Remove when SiteGround is decommissioned — not before. |
| `ssh` | A | SiteGround shell access | Remove when SiteGround is decommissioned — not before. |

**Do not delete these on cutover day.** Rollback depends on SiteGround still serving,
and `ftp`/`ssh` are how you reach it.

**Do delete them when SiteGround is cancelled.** An A record pointing at an IP the
host has reassigned is a subdomain-takeover risk: whoever next gets `34.174.186.164`
inherits four hostnames on the RISE8 domain. This is the single most important
follow-up after the migration settles.

---

## 6. Open questions

1. **`1522905413783._domainkey`** — a numeric DKIM selector nobody has accounted
   for. Identify which service signs with it before assuming it is safe to keep.
2. **`corporate@rise8companies.com`** — the ported privacy policy names this as the
   contact address. Confirm the mailbox exists. (See `REVIEW.md`.)
3. **`mail.rise8companies.com`** — confirm no mail client or script still uses it.
