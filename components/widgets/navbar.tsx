'use client'

import React from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/bases/logo'
import NavConnect from '@/components/widgets/nav-connect'
import { Button } from '@/components/ui/button'
import { NAVBAR_LINKS } from '@/lib/constants'
import LinkNav from '../bases/link-navbar'
import { cn } from '@/lib/utils'
import useScrollHook from '@/lib/hooks/scrollHook'
import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet'

export default function Navbar() {
  const { scrollPos } = useScrollHook()
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <div
      className={
        scrollPos
          ? 'bg-white animate-in slide-in-from-top-80 duration-300 border-b border-border'
          : 'bg-transparent animate-out slide-out-to-top-80 duration-150'
      }
    >
      <nav className="flex items-center h-16 relative container">
        <Logo
          hasSession={!!session}
          color={scrollPos || pathname !== '/' ? 'black' : 'white'}
        />
        <ul
          className={cn(
            'md:flex gap-8 hidden order-2',
            scrollPos || pathname !== '/'
              ? 'text-forground'
              : ' text-background',
          )}
        >
          {NAVBAR_LINKS.map(({ label, href }) => (
            <LinkNav key={label} label={label} href={href} />
          ))}
        </ul>
        <NavConnect user={session?.user} />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                'md:hidden',
                session ? 'order-1' : 'order-2',
                scrollPos || pathname !== '/'
                  ? 'text-foreground'
                  : 'text-foreground',
              )}
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full pt-24">
            <ul className="flex flex-col justify-between text-sm gap-4 h-full">
              {NAVBAR_LINKS.map(({ label, href }) => (
                <LinkNav key={label} label={label} href={href} />
              ))}
              {session ? (
                <div className="mt-auto flex flex-col gap-4">
                  <Link href="/" onClick={() => signOut()}>
                    <Button variant="outline" className="w-full h-10">
                      Se déconnecter
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="mt-auto flex flex-col gap-4">
                  <Link href="/auth">
                    <Button className="w-full h-10">Se connecter</Button>
                  </Link>
                </div>
              )}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}
