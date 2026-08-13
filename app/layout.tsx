import type { Metadata } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { SITE } from '@/content/site'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'RISE8 Companies',
    template: '%s · RISE8 Companies',
  },
  description:
    'RISE8 Companies is a vertically integrated extended-stay hospitality firm — four operating companies under one parent, and owner of the Stayable brand across eight Florida properties.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: 'RISE8 Companies',
    description:
      'One parent. Four operating companies. Eight Florida properties. A single integrated platform.',
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
