import Link from 'next/link'
import { TNavLinks } from '@/lib/types'

export default function LinkNav({ href, label }: TNavLinks) {
  return (
    <li className="text-muted-foreground hover:text-foreground transition-all">
      <Link href={href}>{label}</Link>
    </li>
  )
}
