import React from 'react'
import Logo from './logo'

export default function Header() {
  return (
    <header className="bg-gray-200">
      <div className="flex items-center justify-between container h-16">
        <Logo />
        <nav>nav</nav>
        <div>buttons</div>
      </div>
    </header>
  )
}
