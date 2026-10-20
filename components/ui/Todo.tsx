import type { ReactNode } from 'react'

/** Visible placeholder for a fact that has to come from the client. Grep "TODO" to list them. */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="todo">TODO: {children}</span>
}

/** Renders content text, highlighting any inline "TODO: …" fragment. */
export function Rich({ text }: { text: string }) {
  if (!text.includes('TODO:')) return text
  return text.split(/(TODO:[^.\n)]*)/).map((part, i) =>
    part.startsWith('TODO:') ? (
      <span key={i} className="todo">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export const hasTodo = (text: string) => text.includes('TODO')
