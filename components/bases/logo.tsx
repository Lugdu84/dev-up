import Link from 'next/link'
import { cn } from '@/lib/utils'

type TlogoProps = {
  hasSession: boolean
}

export default function Logo({ hasSession }: TlogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'font-semibold uppercase text-background text-xl  hover:underline underline-offset-4',
        hasSession ? 'order-2' : 'order-1',
      )}
    >
      DEVUP
    </Link>
  )
}
