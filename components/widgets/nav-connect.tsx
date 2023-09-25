import React from 'react'
import Link from 'next/link'
import { LogOut, UserCircle2 } from 'lucide-react'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import type { TUser } from '@/types/types'
import useScrollHook from '@/lib/hooks/scrollHook'
import { LINKAUTH } from '@/lib/constants'
import LinkAuth from '../bases/link-auth'

type UserProps = {
  user?: TUser
}

export default function NavConnect({ user }: UserProps) {
  const { scrollPos } = useScrollHook()
  return (
    <>
      {user ? (
        <div className="order-3 flex-1 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full items-center flex"
              >
                <Avatar className="h-9 w-9">
                  {user?.image ? (
                    <AvatarImage src={user?.image} alt="@shadcn" />
                  ) : null}
                  <AvatarFallback>
                    <UserCircle2 />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 " align="end" forceMount>
              <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                {LINKAUTH.map(({ icon, label, href }) => (
                  <LinkAuth icon={icon} label={label} href={href} key={label} />
                ))}

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <Link href="/" onClick={() => signOut()}>
                    Déconnexion
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link
          href="/auth"
          className="hidden order-3 md:flex-1 md:flex justify-end"
        >
          <Button variant={scrollPos ? 'default' : 'secondary'} size="sm">
            Se Connecter
          </Button>
        </Link>
      )}
    </>
  )
}
