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
    <li className=" text-base  transition-all lg:text-lg font-medium lg:[text-shadow:_0px_0px_20px_#000000]">
      <Link onClick={() => (onClick ? onClick() : null)} href={href}>
        {label}
      </Link>
    </li>
  )
}
