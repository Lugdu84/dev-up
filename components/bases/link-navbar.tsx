import Link from 'next/link'
import type { TNavLinks } from '@/types/types'

type TLinkNav = TNavLinks & {
  onClick?: () => void
}

export default function LinkNav({
  href,
  label,
  onClick = undefined,
}: TLinkNav) {
  return (
    <li className="text-muted-foreground hover:text-foreground transition-all">
      <Link onClick={() => (onClick ? onClick() : null)} href={href}>
        {label}
      </Link>
    </li>
  )
}
