import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function NavMobile() {
  return (
    <div className="fixed inset-0 top-14 z-50 grid-flow-row auto-rows-max p-6 pb-32 h-64 md:hidden animate-in slide-in-from-bottom-80 ">
      <div className="relative z-20 grid gap-6 rounded-md bg-gray-50 border border-gray-200 p-4 text-foreground">
        <ul className="grid grid-flow-row auto-rows-max text-sm">
          <li className="w-full font-medium hover:underline p-2">
            <Link href="/">Ressources</Link>
          </li>
          <li className="w-full font-medium hover:underline p-2">
            <Link href="/">Link 2</Link>
          </li>
          <li className="w-full font-medium hover:underline p-2">
            <Link href="/">Link 3</Link>
          </li>
          <div className="mt-4 flex flex-col gap-4">
            <Link href="/login">
              <Button className="w-full h-10">Se connecter</Button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  )
}
