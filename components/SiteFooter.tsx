import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm sm:grid-cols-3">
        <div>
          <div className="font-semibold">RISE8 Companies</div>
          <p className="mt-2 text-neutral-600">Boca Raton, Florida</p>
          <a
            href="mailto:info@rise8companies.com"
            className="mt-2 inline-block text-neutral-600 hover:text-neutral-900"
          >
            info@rise8companies.com
          </a>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-1 text-neutral-600">
            <li><Link href="/about-us" className="hover:text-neutral-900">About Us</Link></li>
            <li><Link href="/culture-and-values" className="hover:text-neutral-900">Culture &amp; Values</Link></li>
            <li><Link href="/careers" className="hover:text-neutral-900">Careers</Link></li>
            <li><Link href="/investors" className="hover:text-neutral-900">Investors</Link></li>
            <li><Link href="/contact-us" className="hover:text-neutral-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-1 text-neutral-600">
            <li><Link href="/terms-of-use" className="hover:text-neutral-900">Terms of Use</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-neutral-900">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-100 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} RISE8 Companies. All rights reserved.
      </div>
    </footer>
  )
}
