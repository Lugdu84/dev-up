import { ReactNode } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { SITEMETA } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: SITEMETA.title,
  description: SITEMETA.description,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-FR">
      <body
        className={cn(
          inter.className,
          'min-h-screen bg-background antialiased text-foreground',
        )}
      >
        {children}
      </body>
    </html>
  )
}
