import { SubNav, SubFooter } from '@/components/site/SubPageChrome'
import type { LegalBlock } from '@/content/legal'

/** Renders a ported legal document in the design's document style. */
export default function LegalDoc({
  title,
  blocks,
  note,
}: {
  title: string
  blocks: LegalBlock[]
  note: string
}) {
  return (
    <>
      <SubNav dept="Legal" />
      <main id="main" className="doc">
        <span className="kicker">Legal</span>
        <h1>{title}</h1>
        {blocks.map((b, i) =>
          b.t === 'h' ? <h2 key={i}>{b.s}</h2> : <p key={i}>{b.s}</p>
        )}
      </main>
      <SubFooter dept="Legal" note={note} />
    </>
  )
}
