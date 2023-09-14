import { ReactNode } from 'react'
import Footer from '@/components/widgets/footer'
import Navbar from '@/components/widgets/navbar'

type SiteLayoutProps = { children: ReactNode }

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <header className="fixed inset-0 top-0 z-20 border-b border-border bg-white h-16">
        <Navbar />
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
