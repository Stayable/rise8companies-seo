import Page from '@/components/Page'

export const metadata = { title: 'Investors' }

export default function Investors() {
  return (
    <Page title="Investors">
      <p>
        Current investors can access the portal to view statements, documents, and
        distributions.
      </p>
      <p>
        <a
          href="https://investors.appfolioim.com/stayable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Investor Portal →
        </a>
      </p>
    </Page>
  )
}
