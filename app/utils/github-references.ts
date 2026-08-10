import { defineComarkPlugin } from '@comark/nuxt/parse'

// Comark plugin that links bare `@mentions` to GitHub profiles — the one thing
// we relied on `remark-github` for. Issue, PR and commit references already
// arrive as full markdown links from ungh, so only mentions need handling.
type MarkdownNode = string | [string, Record<string, unknown>, ...MarkdownNode[]]

// GitHub handles: alphanumeric with single hyphens, 1–39 chars, no leading or
// trailing hyphen. The leading group captures the char before `@` so we skip
// emails (`a@b.com`) and mid-word matches.
const MENTION_RE = /(^|[^a-zA-Z0-9._`/-])@([a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38})/gi

// Never descend into these: code must stay verbatim (protects `@click`,
// `@apply`, `'@nuxt/ui'` in snippets) and we don't re-link existing anchors.
const SKIP_TAGS = new Set(['a', 'code', 'pre'])

function linkMentions(text: string): MarkdownNode[] {
  const out: MarkdownNode[] = []
  let last = 0
  MENTION_RE.lastIndex = 0
  for (let match = MENTION_RE.exec(text); match; match = MENTION_RE.exec(text)) {
    const handle = match[2]
    if (!handle) continue
    const at = match.index + (match[1]?.length ?? 0)
    if (at > last) out.push(text.slice(last, at))
    out.push(['a', { href: `https://github.com/${handle}` }, `@${handle}`])
    last = at + 1 + handle.length
  }
  if (out.length === 0) return [text]
  if (last < text.length) out.push(text.slice(last))
  return out
}

function walk(nodes: MarkdownNode[]): MarkdownNode[] {
  const result: MarkdownNode[] = []
  for (const node of nodes) {
    if (typeof node === 'string') {
      result.push(...linkMentions(node))
    } else if (SKIP_TAGS.has(node[0])) {
      result.push(node)
    } else {
      result.push([node[0], node[1], ...walk(node.slice(2) as MarkdownNode[])])
    }
  }
  return result
}

export const githubReferences = defineComarkPlugin(() => ({
  name: 'github-references',
  post(state) {
    state.tree.nodes = walk(state.tree.nodes as MarkdownNode[]) as typeof state.tree.nodes
  }
}))
