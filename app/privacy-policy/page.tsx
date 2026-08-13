import type { Metadata } from 'next'
import LegalDoc from '@/components/site/LegalDoc'
import { PRIVACY_POLICY } from '@/content/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How RISE8 Companies collects, uses, and discloses information from visitors to rise8companies.com.',
}

export default function PrivacyPolicy() {
  return (
    <LegalDoc
      title="Privacy Policy"
      blocks={PRIVACY_POLICY}
      note="Ported verbatim from the existing rise8companies.com privacy policy."
    />
  )
}
