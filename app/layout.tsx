import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev-Up!',
  description:
    "La plateforme d'entraide pour les développeurs, faite par des développeurs. Que vous envisagiez ou que vous soyez en formation, jeunes diplômés, retrouvez toutes les ressources dont vous avez besoin pour monter en compétence, un accompagnement et une communauté de passionnés. L'entraide est le coeur de Dev-Up! Rejoignez nous sans plus attendre.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr-FR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
