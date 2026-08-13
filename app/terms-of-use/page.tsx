import type { Metadata } from 'next'
import LegalDoc from '@/components/site/LegalDoc'
import { TERMS_OF_USE } from '@/content/legal'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions governing use of rise8companies.com.',
}

export default function TermsOfUse() {
  return (
    <LegalDoc
      title="Terms of Use"
      blocks={TERMS_OF_USE}
      note="Ported verbatim from the existing rise8companies.com terms of use."
    />
  )
}
