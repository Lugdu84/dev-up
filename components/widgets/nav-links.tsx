import Link from 'next/link'
import React from 'react'

export default function NavLinks() {
  return (
    <ul className="md:flex gap-4 hidden">
      <li>
        <Link href="/">Ressources</Link>
      </li>
      <li>
        <Link href="/">Lien 2</Link>
      </li>
      <li>
        <Link href="/">Lien 3</Link>
      </li>
    </ul>
  )
}
