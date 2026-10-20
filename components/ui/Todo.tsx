import type { ReactNode } from 'react'

/** Visible placeholder for a fact that has to come from the client. Grep "TODO" to list them. */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="todo">TODO: {children}</span>
}
