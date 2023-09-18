import React from 'react'
import Link from 'next/link'
import { Bell, Gauge, LogOut, User, UserCircle2 } from 'lucide-react'

import { signOut, useSession } from 'next-auth/react'
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

export default function NavConnect() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="order-3">
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full items-center flex"
            >
              <Avatar className="h-9 w-9">
                {session.user?.image ? (
                  <AvatarImage src={session.user?.image} alt="@shadcn" />
                ) : null}
                <AvatarFallback>
                  <UserCircle2 />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 " align="end" forceMount>
            <DropdownMenuLabel>{session.user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Gauge className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <Link href="/" onClick={() => signOut()}>
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/auth" className="md:flex">
          <Button size="sm">Se Connecter</Button>
        </Link>
      )}
    </div>
  )
}
