import { Icon } from '@/components/ui/Icon'

export type PreviewKind = 'crm' | 'erp' | 'ai' | 'bot' | 'pos' | 'flow'

/**
 * Small static mock-ups of our systems for the services bento: decorative, drawn
 * from plain elements in the theme colours, so they cost no images and no JS.
 */
export function MiniPreview({ kind }: { kind: PreviewKind }) {
  return (
    <div
      aria-hidden="true"
      className="mini-preview pointer-events-none h-full w-full overflow-hidden rounded-control border border-line bg-bg p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
    >
      {kind === 'crm' && <Crm />}
      {kind === 'erp' && <Erp />}
      {kind === 'ai' && <Ai />}
      {kind === 'bot' && <Bot />}
      {kind === 'pos' && <Pos />}
      {kind === 'flow' && <Flow />}
    </div>
  )
}

const Bar = ({ w, tone = 'bg-line-strong' }: { w: string; tone?: string }) => (
  <span className={`block h-1.5 rounded-full ${tone}`} style={{ width: w }} />
)

function Crm() {
  const columns = [
    {
      dot: 'bg-muted',
      cards: [
        ['70%', '45%'],
        ['60%', '35%'],
        ['80%', '50%'],
        ['55%', '40%'],
        ['65%', '30%'],
      ],
    },
    {
      dot: 'bg-accent',
      cards: [
        ['65%', '40%'],
        ['75%', '55%'],
        ['60%', '45%'],
        ['70%', '35%'],
      ],
    },
    {
      dot: 'bg-success',
      cards: [
        ['55%', '30%'],
        ['72%', '42%'],
        ['62%', '38%'],
      ],
    },
  ]
  return (
    <div className="grid h-full grid-cols-3 gap-2">
      {columns.map((col, c) => (
        <div key={c} className="flex flex-col gap-1.5 rounded-lg bg-surface-2/60 p-1.5">
          <span className="flex items-center gap-1.5 px-0.5 py-1">
            <span className={`size-1.5 rounded-full ${col.dot}`} />
            <Bar w="40%" />
          </span>
          {col.cards.map(([a, b], i) => (
            <span
              key={i}
              className={`space-y-1.5 rounded-md border border-line bg-surface p-2 ${
                c === 1 && i === 0 ? 'border-accent/50' : ''
              }`}
            >
              <Bar w={a} tone="bg-text/40" />
              <Bar w={b} />
              <span className="flex items-center justify-between pt-0.5">
                <span className="size-3 rounded-full bg-navy" />
                <span className="h-1.5 w-6 rounded-full bg-accent/60" />
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

function Erp() {
  const rows = [
    ['bg-success', '82%'],
    ['bg-accent', '46%'],
    ['bg-success', '68%'],
    ['bg-danger', '14%'],
    ['bg-success', '74%'],
  ]
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex gap-2">
        {['bg-accent', 'bg-navy', 'bg-surface-3'].map((t, i) => (
          <span key={i} className="flex-1 space-y-1.5 rounded-md bg-surface-2 p-2">
            <Bar w="50%" />
            <span className={`block h-2.5 w-3/4 rounded-sm ${t}`} />
          </span>
        ))}
      </div>
      <div className="flex-1 space-y-2 rounded-md bg-surface-2/60 p-2">
        {rows.map(([tone, w], i) => (
          <span key={i} className="grid grid-cols-[1fr_0.6fr_1fr] items-center gap-2">
            <Bar w="85%" tone="bg-text/30" />
            <Bar w="60%" />
            <span className="h-1.5 overflow-hidden rounded-full bg-line">
              <span className={`block h-full rounded-full ${tone}`} style={{ width: w }} />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Ai() {
  return (
    <div className="flex h-full flex-col justify-end gap-2">
      <span className="ml-auto w-3/5 space-y-1.5 rounded-lg rounded-br-sm bg-navy p-2">
        <Bar w="90%" tone="bg-white/50" />
        <Bar w="55%" tone="bg-white/30" />
      </span>
      <span className="flex w-4/5 gap-2 rounded-lg rounded-bl-sm border border-line bg-surface-2 p-2">
        <Icon name="sparkles" className="size-3.5 shrink-0 text-accent-text" />
        <span className="flex-1 space-y-1.5">
          <Bar w="95%" tone="bg-text/40" />
          <Bar w="80%" />
          <Bar w="60%" />
        </span>
      </span>
    </div>
  )
}

function Bot() {
  return (
    <div className="flex h-full flex-col justify-end gap-2">
      <span className="w-3/4 space-y-1.5 rounded-lg rounded-bl-sm bg-surface-2 p-2">
        <Bar w="85%" tone="bg-text/40" />
        <Bar w="50%" />
      </span>
      <span className="grid w-3/4 grid-cols-2 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-4 rounded-md ${i === 0 ? 'bg-accent/80' : 'bg-surface-3'}`} />
        ))}
      </span>
      <span className="ml-auto w-2/5 rounded-lg rounded-br-sm bg-navy p-2">
        <Bar w="80%" tone="bg-white/50" />
      </span>
    </div>
  )
}

function Pos() {
  return (
    <div className="flex h-full flex-col gap-1.5 rounded-md bg-surface-2/60 p-2">
      {['70%', '55%', '62%'].map((w, i) => (
        <span key={i} className="flex items-center justify-between gap-3">
          <Bar w={w} tone="bg-text/35" />
          <span className="h-1.5 w-8 shrink-0 rounded-full bg-line-strong" />
        </span>
      ))}
      <span className="mt-auto flex items-center justify-between border-t border-dashed border-line-strong pt-1.5">
        <Bar w="30%" />
        <span className="h-2 w-10 rounded-full bg-text/60" />
      </span>
      <span className="h-5 rounded-md bg-accent" />
    </div>
  )
}

function Flow() {
  return (
    <div className="flex h-full items-center justify-between gap-1">
      {['bg-surface-2', 'bg-navy', 'bg-accent/80'].map((tone, i) => (
        <span key={i} className="contents">
          {i > 0 && <span className="h-px flex-1 bg-line-strong" />}
          <span className={`grid size-9 shrink-0 place-items-center rounded-lg ${tone}`}>
            <span className="size-2 rounded-full bg-text/50" />
          </span>
        </span>
      ))}
    </div>
  )
}
