import type { MDXComponents } from 'mdx/types'

// Required by @next/mdx for the App Router. Map custom element renderers here later.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components }
}
