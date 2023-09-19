'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Logo from '@/components/bases/logo'
import NavConnect from '@/components/widgets/nav-connect'
import { Button } from '@/components/ui/button'
import { NAVBAR_LINKS } from '@/lib/constants'
import LinkNav from '../bases/link-navbar'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { data: session } = useSession()
  const [showNavbar, setShowNavbar] = useState<boolean>(false)

  return (
    <nav className="flex items-center justify-between container h-16 relative">
      <Logo hasSession={!!session} />
      <ul className="md:flex gap-8 hidden order-2">
        {NAVBAR_LINKS.map(({ label, href }) => (
          <LinkNav
            key={label}
            label={label}
            href={href}
            onClick={() => setShowNavbar(false)}
          />
        ))}
      </ul>
      <NavConnect user={session?.user} />
      <Button
        variant="outline"
        size="icon"
        className={cn('md:hidden', session ? 'order-1' : 'order-2')}
        onClick={() => setShowNavbar(!showNavbar)}
      >
        {showNavbar ? <X /> : <Menu />}
      </Button>
      {showNavbar ? (
        <div className="fixed inset-0 top-14 z-50 p-6 pb-32 h-64 md:hidden animate-in slide-in-from-bottom-80">
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
              {session ? null : (
                <div className="mt-4 flex flex-col gap-4">
                  <Link href="/auth">
                    <Button className="w-full h-10">Se connecter</Button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
