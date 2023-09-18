'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/bases/logo'
import NavConnect from '@/components/widgets/nav-connect'
import { Button } from '@/components/ui/button'
import { NAVBAR_LINKS } from '@/lib/constants'
import LinkNav from '../bases/link-navbar'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)

  return (
    <nav className="flex items-center justify-between container h-16 relative">
      <Logo />
      <ul className="md:flex gap-4 hidden order-2">
        {NAVBAR_LINKS.map(({ label, href }) => (
          <LinkNav
            key={label}
            label={label}
            href={href}
            onClick={() => setShowNavbar(false)}
          />
        ))}
      </ul>
      <NavConnect />
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        onClick={() => setShowNavbar(!showNavbar)}
      >
        {showNavbar ? <X /> : <Menu />}
      </Button>
      {showNavbar ? (
        <div className="fixed inset-0 top-14 z-50 p-6 pb-32 h-64 md:hidden animate-in slide-in-from-bottom-80 order-1">
          <div className="relative z-20 grid gap-6 rounded-md bg-gray-50 border border-gray-200 p-4 text-foreground">
            <ul className="grid grid-flow-row auto-rows-max text-sm gap-4">
              {NAVBAR_LINKS.map(({ label, href }) => (
                <LinkNav
                  onClick={() => setShowNavbar(false)}
                  key={label}
                  label={label}
                  href={href}
                />
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <Link href="/auth">
                  <Button className="w-full h-10">Se connecter</Button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
