import Image from 'next/image'
import Link from 'next/link'

export function Logo({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} aria-label={label} className="flex items-center gap-2.5">
      <Image src="/zolvi-logo.svg" alt="" width={36} height={36} unoptimized />
      <span className="font-display text-lg font-bold tracking-tight">ZOLVI</span>
    </Link>
  )
}
