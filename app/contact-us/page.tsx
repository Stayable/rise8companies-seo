import Page from '@/components/Page'

export const metadata = { title: 'Contact' }

export default function ContactUs() {
  return (
    <Page title="Contact">
      <p>Our team would love to hear from you.</p>
      <p>
        Email{' '}
        <a href="mailto:info@rise8companies.com">info@rise8companies.com</a>.
      </p>
      <p>
        A contact form (First Name, Last Name, Email, Message) will be wired to a
        submission endpoint during the build.
      </p>
    </Page>
  )
}
