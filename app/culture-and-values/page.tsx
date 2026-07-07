import Page from '@/components/Page'

export const metadata = { title: 'Culture & Values' }

const values = [
  'Integrity',
  'Accountability',
  'Innovation',
  'Profitability',
  'Communication',
  'Teamwork',
  'Living Fully',
  'Doing Well by Doing Good',
]

export default function CultureAndValues() {
  return (
    <Page title="Culture & Values">
      <p>The eight values that guide how we work:</p>
      <ul>
        {values.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </Page>
  )
}
