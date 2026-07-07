---
name: resume
description: Session-start resume for the rise8companies.com revamp. Reads todo.md + recent git log and shows open items and the next step. Keep output under 20 lines.
---

# Resume

Bring the session up to speed on the rise8companies.com revamp fast. Keep total output under 20 lines.

## Steps

1. Read `todo.md` (Current Sprint first).
2. Run `git log --oneline -5` for recent progress.
3. If `snapshot/site-state.md` exists, note it's done; if not, the snapshot is the first open task.

## Output format

- **Working on:** rise8companies.com revamp (content refresh + Next.js/Vercel rebuild)
- **Recent commits:** <last 3, one line each>
- **Open — Current Sprint:** <unchecked items from todo.md Current Sprint>
- **Next step:** <the single most logical next action>

Do not explore beyond these files unless asked. Flag any migration guardrail (never touch live SiteGround site; confirm DNS/email before cutover) only if the next step touches it.
