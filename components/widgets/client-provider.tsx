'use client'

import { Session } from 'next-auth'
import { SessionProvider as Provider } from 'next-auth/react'
import React from 'react'

type SessionProviderProps = {
  children: React.ReactNode
  session: Session | null
}
export default function ClientProvider({
  children,
  session,
}: SessionProviderProps): React.ReactNode {
  return <Provider session={session}>{children}</Provider>
}
