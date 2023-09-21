import { Bell, Gauge, User } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { TLinkAuth } from '@/types/types'
import { DropdownMenuItem } from '../ui/dropdown-menu'

const Icons: Record<string, React.ReactNode> = {
  dashboard: <Gauge className="mr-2 h-4 w-4" />,
  notifications: <Bell className="mr-2 h-4 w-4" />,
  profile: <User className="mr-2 h-4 w-4" />,
}

export default function LinkAuth({ icon, label, href }: TLinkAuth) {
  return (
    <DropdownMenuItem>
      {icon ? Icons[icon] : null}
      <Link href={href} className="text-foreground">
        {label}
      </Link>
    </DropdownMenuItem>
  )
}
