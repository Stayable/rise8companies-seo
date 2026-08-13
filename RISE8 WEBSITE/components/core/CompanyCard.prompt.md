A platform-rail entry — large serif accent number, uppercase kind label, serif name, serif description, and a right-aligned link, separated by a 0.5px hairline. Hover nudges it inward and turns the link teal. Stack several inside a `--paper-3` panel to build the four-company rail.

```jsx
<CompanyCard
  number="02"
  kind="Operations"
  name="RISE8 Management"
  description="In-house operator for every property — revenue, guest experience, maintenance, staffing."
  link="Capabilities" href="#mgmt"
/>
```

Reads as a richer, vertical sibling of RegisterRow — use it when each entry needs its own block rather than a table row.
