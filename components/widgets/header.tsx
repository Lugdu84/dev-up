'use client'

import React, { useState } from 'react'
import Logo from './logo'
import NavLinks from './nav-links'
import NavButtons from './nav-buttons'
import { Button } from '../ui/button'

export default function Header() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  return (
    <header className="bg-gray-200">
      <div className="flex items-center justify-between container h-16 relative">
        <Logo />
        <NavLinks />
        <NavButtons />
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? <div>x</div> : <div>=</div>}
        </Button>
        {showNavbar ? (
          <div className="absolute top-20 left-0 w-full bg-gray-100 container h-64">
            navbar mobile
          </div>
        ) : null}
      </div>
    </header>
  )
}
