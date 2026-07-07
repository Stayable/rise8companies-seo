import Link from 'next/link'

const nav = [
  { href: '/about-us', label: 'About Us' },
  { href: '/culture-and-values', label: 'Culture & Values' },
  { href: '/careers', label: 'Careers' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact-us', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          RISE8 Companies
        </Link>
        <nav className="hidden gap-6 text-sm sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-600 hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
