'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Icon, type IconName } from '@/components/ui/Icon'

type Card = { chaos: string; order: string; value: string }

/**
 * Where each card lies in the chaos state, as an offset from its dashboard slot
 * (in % of the card itself, so it scales with the panel) plus a rotation.
 */
const scatter = [
  { x: '4%', y: '13%', r: -8 },
  { x: '-4%', y: '0%', r: 6 },
  { x: '58%', y: '-13%', r: -4 },
  { x: '-108%', y: '80%', r: 9 },
  { x: '113%', y: '-73%', r: -10 },
  { x: '-58%', y: '13%', r: 5 },
]
const orderIcons: IconName[] = ['phone', 'package', 'sheet', 'truck', 'chart', 'chat']
const bars = [72, 48, 90, 60, 82, 38]

/**
 * Problem cards scattered over the panel line up into a dashboard as the visitor
 * scrolls or moves the pointer. Progress lives in a CSS variable (--p) updated in
 * requestAnimationFrame, so React never re-renders while animating.
 */
export function ChaosToOrder({
  cards,
  labels,
}: {
  cards: Card[]
  labels: { panel: string; toOrder: string; toChaos: string }
}) {
  const ref = useRef<HTMLDivElement>(null)
  const lockRef = useRef<number | null>(null)
  const [ordered, setOrdered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const docTop = el.getBoundingClientRect().top + scrollY
    let scrollP = 0
    let pointerP = 0
    let current = 0
    let raf = 0
    let lastOrdered = false

    const target = () => lockRef.current ?? Math.max(scrollP, pointerP)
    const tick = () => {
      const goal = target()
      current = reduce ? goal : current + (goal - current) * 0.12
      if (Math.abs(goal - current) < 0.001) current = goal
      el.style.setProperty('--p', current.toFixed(3))
      const isOrdered = current > 0.5
      if (isOrdered !== lastOrdered) {
        lastOrdered = isOrdered
        setOrdered(isOrdered)
      }
      raf = current === goal ? 0 : requestAnimationFrame(tick)
    }
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      const vh = innerHeight
      const start = Math.max(0, docTop - vh * 0.8)
      const p = (scrollY - start) / (vh * 0.45)
      scrollP = Math.min(1, Math.max(0, p))
      kick()
    }
    let last: { x: number; y: number } | null = null
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      if (last)
        pointerP = Math.min(1, pointerP + Math.hypot(e.clientX - last.x, e.clientY - last.y) / 700)
      last = { x: e.clientX, y: e.clientY }
      kick()
    }
    const onKick = () => kick()

    const hero = el.closest('section') ?? el
    addEventListener('scroll', onScroll, { passive: true })
    hero.addEventListener('pointermove', onPointer as EventListener, { passive: true })
    el.addEventListener('zolvi:kick', onKick)
    onScroll()
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('scroll', onScroll)
      hero.removeEventListener('pointermove', onPointer as EventListener)
      el.removeEventListener('zolvi:kick', onKick)
    }
  }, [])

  const toggle = () => {
    lockRef.current = ordered ? 0 : 1
    ref.current?.dispatchEvent(new Event('zolvi:kick'))
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        role="img"
        aria-label={labels.panel}
        style={{ '--p': 0 } as CSSProperties}
        className="relative aspect-[5/4] w-full select-none"
      >
        {/* Dashboard frame fades in as the cards settle */}
        <div
          aria-hidden="true"
          style={{ opacity: 'var(--p)' }}
          className="absolute -inset-3 rounded-[1.75rem] border border-line bg-surface/60 shadow-[var(--shadow)] sm:-inset-5"
        >
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
            <span className="size-2 rounded-full bg-[#ff6b5b]" />
            <span className="size-2 rounded-full bg-accent" />
            <span className="size-2 rounded-full bg-[#4ade80]" />
            <span className="ml-3 text-[10px] font-bold tracking-[0.16em] text-muted uppercase">
              ZOLVI · Dashboard
            </span>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-8 bottom-0 sm:top-10">
          {cards.slice(0, 6).map((card, i) => {
            const s = scatter[i]
            const col = i % 2
            const row = Math.floor(i / 2)
            return (
              <div
                key={card.chaos}
                style={
                  {
                    left: `${col * 52}%`,
                    top: `${row * 34}%`,
                    transform: `translate(calc(${s.x} * (1 - var(--p))), calc(${s.y} * (1 - var(--p)))) rotate(calc(${s.r}deg * (1 - var(--p))))`,
                    zIndex: 6 - i,
                  } as CSSProperties
                }
                className="absolute h-[30%] w-[48%] will-change-transform"
              >
                {/* Chaos face */}
                <div
                  style={{ opacity: 'calc(1 - var(--p))' }}
                  className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#ff8a5b]/30 bg-[linear-gradient(160deg,#3a2418,#2a1b16)] p-3 text-[#ffd6c2] shadow-lg sm:p-4"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-[#ff6b5b]/20 text-xs font-black text-[#ff9a85]">
                    !
                  </span>
                  <span className="text-[11px] leading-snug font-bold sm:text-sm">
                    {card.chaos}
                  </span>
                </div>
                {/* Order face */}
                <div
                  style={{ opacity: 'var(--p)' }}
                  className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-line bg-surface-2 p-3 sm:p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-muted sm:text-xs">
                      {card.order}
                    </span>
                    <Icon name={orderIcons[i]} className="size-3.5 text-accent sm:size-4" />
                  </div>
                  <div>
                    <div className="text-[11px] leading-tight font-extrabold text-text sm:text-base">
                      {card.value}
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${bars[i]}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={ordered}
        className="btn btn-secondary mx-auto mt-8 flex min-h-10 py-2 text-sm sm:mt-10"
      >
        <Icon name={ordered ? 'close' : 'layers'} className="size-4" />
        {ordered ? labels.toChaos : labels.toOrder}
      </button>
    </div>
  )
}
