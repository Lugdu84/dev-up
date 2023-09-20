import Link from 'next/link'
import React from 'react'
import { TNavLinks } from '@/types/types'

export default function FooterLink({ label, href }: TNavLinks) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground transition hover:opacity-85"
      >
        {label}
      </Link>
    </li>
  )
}
