export default function Page({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="content mx-auto max-w-3xl px-6 py-16">
      <div className="draft">
        Draft scaffold — structure only. Copy pending rewrite &amp; Rob&rsquo;s
        approval; visual design pending Claude Design files.
      </div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
