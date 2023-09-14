'use client'

import React, { useState } from 'react'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import Logo from './logo'
import NavLinks from './nav-links'
import NavButtons from './nav-buttons'
import { Button } from '../ui/button'
import NavMobile from './nav-mobile'

export default function Header() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  return (
    <header className="fixed inset-0 top-0 z-20 border-b border-border bg-white h-16">
      <nav className="flex items-center justify-between container h-16 relative">
        <Logo />
        <NavLinks />
        <NavButtons />
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? (
            <div>
              <Cross1Icon />
            </div>
          ) : (
            <div>
              <HamburgerMenuIcon />
            </div>
          )}
        </Button>
        {showNavbar ? <NavMobile /> : null}
      </nav>
    </header>
  )
}
