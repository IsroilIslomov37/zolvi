'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Icon, type IconName } from '@/components/ui/Icon'

type Card = { chaos: string; order: string; value: string }

/**
 * Where each card lies in the chaos state, as an offset from its dashboard slot
 * (in % of the card itself, so it scales with the panel) plus a rotation.
 * `depth` is how far the card drifts with the cursor (px at the panel edge).
 */
const scatter = [
  { x: '-14%', y: '-22%', r: -7, depth: 14 },
  { x: '16%', y: '14%', r: 6, depth: 22 },
  { x: '34%', y: '-8%', r: -4, depth: 10 },
  { x: '-30%', y: '30%', r: 8, depth: 26 },
  { x: '10%', y: '-38%', r: -9, depth: 18 },
  { x: '-12%', y: '22%', r: 4, depth: 12 },
]
const orderIcons: IconName[] = ['phone', 'package', 'sheet', 'truck', 'chart', 'chat']
const bars = [72, 48, 90, 60, 82, 38]
const spark = [30, 42, 38, 55, 50, 64, 61, 72, 70, 84, 80, 92]

/**
 * Problem cards scattered around the panel spring into a dashboard when the panel
 * comes into view (and on the toggle). Progress lives in CSS variables on the hero
 * section (--p for order, --mx/--my for the cursor), integrated as a spring in
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
  const goalRef = useRef(0)
  const kickRef = useRef<() => void>(() => {})
  const [ordered, setOrdered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const stage = el.closest('section') ?? el
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = matchMedia('(pointer: fine)').matches
    let p = 0
    let v = 0
    let mx = 0
    let my = 0
    let tx = 0
    let ty = 0
    let raf = 0
    let lastOrdered = false

    const tick = () => {
      const goal = goalRef.current
      if (reduce) {
        p = goal
        v = 0
      } else {
        // Under-damped spring: settles with a small overshoot.
        v = (v + (goal - p) * 0.07) * 0.8
        p += v
      }
      mx += (tx - mx) * 0.08
      my += (ty - my) * 0.08
      const settled =
        Math.abs(goal - p) < 0.001 &&
        Math.abs(v) < 0.0005 &&
        Math.abs(tx - mx) < 0.002 &&
        Math.abs(ty - my) < 0.002
      if (settled) {
        p = goal
        mx = tx
        my = ty
      }
      stage.style.setProperty('--p', p.toFixed(4))
      stage.style.setProperty('--mx', mx.toFixed(4))
      stage.style.setProperty('--my', my.toFixed(4))
      const isOrdered = p > 0.5
      if (isOrdered !== lastOrdered) {
        lastOrdered = isOrdered
        setOrdered(isOrdered)
      }
      raf = settled ? 0 : requestAnimationFrame(tick)
    }
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    kickRef.current = kick

    // Autoplay once the panel is properly on screen (on phones: as it scrolls in).
    let timer = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        timer = window.setTimeout(
          () => {
            goalRef.current = 1
            kick()
          },
          reduce ? 0 : 900,
        )
      },
      { threshold: 0.6 },
    )
    io.observe(el)

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || reduce) return
      const r = stage.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width) * 2 - 1
      ty = ((e.clientY - r.top) / r.height) * 2 - 1
      kick()
    }
    const onLeave = () => {
      tx = 0
      ty = 0
      kick()
    }
    if (finePointer) {
      stage.addEventListener('pointermove', onPointer as EventListener, { passive: true })
      stage.addEventListener('pointerleave', onLeave)
    }
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      io.disconnect()
      stage.removeEventListener('pointermove', onPointer as EventListener)
      stage.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const toggle = () => {
    goalRef.current = ordered ? 0 : 1
    kickRef.current()
  }

  return (
    <div className="relative">
      {/* Dashboard frame: faint while the cards are scattered, solid once they settle. */}
      <div
        style={{ transform: 'translate(calc(var(--mx) * -6px), calc(var(--my) * -6px))' }}
        className="absolute -inset-3 sm:-inset-5"
      >
        <div
          aria-hidden="true"
          style={{ opacity: 'calc(0.45 + 0.55 * min(var(--p), 1))' }}
          className="panel absolute inset-0"
        />
        <div className="relative flex items-center justify-between gap-3 border-b border-line py-2 pr-2 pl-4">
          <span className="flex items-center gap-2 text-sm font-semibold text-muted">
            <span className="size-2 rounded-full bg-success" aria-hidden="true" />
            ZOLVI · Dashboard
          </span>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={ordered}
            className="btn btn-ghost btn-sm min-h-9 px-3"
          >
            <Icon name={ordered ? 'close' : 'layers'} className="size-4" />
            {ordered ? labels.toChaos : labels.toOrder}
          </button>
        </div>
        {/* Weekly trend strip along the bottom of the dashboard */}
        <div
          aria-hidden="true"
          className="absolute inset-x-4 bottom-4 flex h-[9%] items-end gap-1 sm:inset-x-5"
        >
          {spark.map((h, i) => (
            <span
              key={i}
              style={{
                height: `${h}%`,
                transform: 'scaleY(min(var(--p), 1))',
                transitionDelay: `${i * 20}ms`,
              }}
              className={`flex-1 origin-bottom rounded-sm ${i === spark.length - 1 ? 'bg-accent' : 'bg-navy'}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={ref}
        role="img"
        aria-label={labels.panel}
        className="pointer-events-none relative aspect-[4/5] w-full select-none sm:aspect-[5/4]"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-12 bottom-[14%] sm:top-14">
          {cards.slice(0, 6).map((card, i) => {
            const s = scatter[i]
            const col = i % 2
            const row = Math.floor(i / 2)
            const rest = '(1 - var(--p))'
            return (
              <div
                key={card.chaos}
                style={
                  {
                    left: `${col * 51.5}%`,
                    top: `${row * 34.5}%`,
                    transform: `translate(calc(${s.x} * ${rest} + var(--mx) * ${s.depth}px), calc(${s.y} * ${rest} + var(--my) * ${s.depth}px)) rotate(calc(${s.r}deg * ${rest}))`,
                    zIndex: i % 3 === 1 ? 3 : 6 - i,
                  } as CSSProperties
                }
                className="absolute h-[31%] w-[48.5%] rounded-card bg-surface-2 will-change-transform"
              >
                {/* Chaos face */}
                <div
                  style={{ opacity: 'calc(1 - var(--p))' }}
                  className="absolute inset-0 flex flex-col justify-between rounded-card border border-danger/35 bg-danger/10 p-3 shadow-float sm:p-4"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-danger/20 text-danger">
                    <Icon name="alert" className="size-3.5" />
                  </span>
                  <span className="text-xs leading-snug font-semibold text-text sm:text-sm">
                    {card.chaos}
                  </span>
                </div>
                {/* Order face */}
                <div
                  style={{ opacity: 'var(--p)' }}
                  className="absolute inset-0 flex flex-col justify-between rounded-card border border-line p-3 sm:p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs leading-snug text-muted">{card.order}</span>
                    <Icon name={orderIcons[i]} className="size-4 shrink-0 text-accent-text" />
                  </div>
                  <div>
                    <div className="text-sm leading-tight font-bold text-text sm:text-base">
                      {card.value}
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full origin-left rounded-full bg-accent"
                        style={{ width: `${bars[i]}%`, transform: 'scaleX(min(var(--p), 1))' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
