Square, hairline-bordered CTA with an uppercase tracked label — use for any primary or secondary action. `primary` fills (ink on paper, or paper on navy via `onDark`) and inverts on hover; `ghost` is an underlined text link.

```jsx
<Button variant="primary" arrow>Explore the platform</Button>
<Button variant="ghost" href="#invest" arrow>Invest with us</Button>
<Button variant="primary" onDark>Investor relations</Button>
```

Variants: `variant` (`primary` | `ghost`), `onDark` (invert for navy surfaces), `arrow` (trailing →), `href` (renders as `<a>`). Never set a border-radius — the brand is square.
