import Link from 'next/link'
import { cn } from '@/lib/utils'

type TlogoProps = {
  hasSession?: boolean
  color?: 'black' | 'white'
}

export default function Logo({ hasSession, color = 'white' }: TlogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'font-semibold uppercase text-foreground text-xl  hover:underline underline-offset-4',
        hasSession ? 'order-2' : 'order-1',
        color === 'white' ? 'text-background' : 'text-forground',
      )}
    >
      DEVUP
    </Link>
  )
}
