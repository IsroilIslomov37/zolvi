import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  ChevronDown,
  Clock,
  Cloud,
  Code2,
  CreditCard,
  Factory,
  FileSpreadsheet,
  Globe,
  GraduationCap,
  Hotel,
  Layers,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Package,
  Phone,
  Plane,
  Play,
  Plug,
  Plus,
  Quote,
  School,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Stethoscope,
  Store,
  Sun,
  Truck,
  UtensilsCrossed,
  Users,
  Workflow,
  Wrench,
  X,
  Bot,
  type LucideIcon,
} from 'lucide-react'
import type { SVGProps } from 'react'

function Telegram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.94 4.3a1.1 1.1 0 0 0-1.5-1.2L2.8 10.1c-.95.38-.93 1.73.03 2.07l4.4 1.55 1.7 5.27c.25.77 1.22 1 1.78.42l2.45-2.5 4.42 3.27c.66.49 1.6.12 1.77-.68L21.94 4.3ZM9.5 13.4l8.3-6.1-6.5 7.2-.28 3.06-1.52-4.16Z" />
    </svg>
  )
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13v5.87h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
    </svg>
  )
}

const icons = {
  crm: Users,
  erp: Boxes,
  automation: Workflow,
  ai: BrainCircuit,
  sparkles: Sparkles,
  bot: Bot,
  pos: CreditCard,
  web: Globe,
  mobile: Smartphone,
  saas: Cloud,
  cart: ShoppingCart,
  api: Plug,
  code: Code2,
  support: LifeBuoy,
  restaurant: UtensilsCrossed,
  hotel: Hotel,
  education: GraduationCap,
  school: School,
  retail: Store,
  clinic: Stethoscope,
  truck: Truck,
  plane: Plane,
  factory: Factory,
  wrench: Wrench,
  arrow: ArrowRight,
  external: ArrowUpRight,
  check: Check,
  alert: CircleAlert,
  success: CircleCheck,
  prev: ChevronLeft,
  next: ChevronRight,
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  menu: Menu,
  close: X,
  sun: Sun,
  moon: Moon,
  chevron: ChevronDown,
  plus: Plus,
  play: Play,
  quote: Quote,
  clock: Clock,
  chart: BarChart3,
  shield: ShieldCheck,
  layers: Layers,
  package: Package,
  chat: MessageCircle,
  calculator: Calculator,
  search: Search,
  sheet: FileSpreadsheet,
  telegram: Telegram,
  linkedin: Linkedin,
} satisfies Record<string, LucideIcon | typeof Telegram>

export type IconName = keyof typeof icons

export function Icon({
  name,
  className = 'size-5',
  ...rest
}: { name: IconName; className?: string } & Omit<SVGProps<SVGSVGElement>, 'ref'>) {
  const Component = icons[name]
  return <Component className={className} aria-hidden="true" focusable="false" {...rest} />
}
