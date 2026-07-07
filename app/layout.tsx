import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  metadataBase: new URL('https://rise8companies.com'),
  title: {
    default: 'RISE8 Companies',
    template: '%s · RISE8 Companies',
  },
  description:
    'RISE8 Companies is a vertically integrated real estate investment and operations firm headquartered in Boca Raton, Florida, and owner of the Stayable extended-stay hotel brand.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
