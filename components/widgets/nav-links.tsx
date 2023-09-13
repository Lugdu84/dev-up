import Link from 'next/link'
import React from 'react'

export default function NavLinks() {
  return (
    <nav className="md:flex gap-4 hidden">
      <Link href="/">Ressources</Link>
      <Link href="/">Lien 2</Link>
      <Link href="/">Lien 3</Link>
    </nav>
  )
}
