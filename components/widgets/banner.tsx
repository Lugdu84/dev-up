import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Banner() {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gray-900 before:opacity-30 sm:">
      <Image
        className="w-full h-screen object-cover select-none"
        src="/assets/team1.jpg"
        alt="Plusieurs ordinateurs d'un équipe de développeurs"
        width={2500}
        height={1600}
      />
      <div className="absolute top-[45%] flex items-center flex-col text-center decoration-white z-20">
        <h1 className="text-6xl lg:text-9xl font-bold text-white [text-shadow:_0px_0px_10px_#000000]">
          DEV-UP!
        </h1>
        <h2 className="text-lg lg:text-2xl font-regular text-white [text-shadow:_0px_0px_10px_#000000]">
          La plateforme d&apos;entraide pour les développeurs
        </h2>
      </div>
      <ChevronDown
        className="absolute text-white z-20 top-[93%] animate-bounce lg:hidden"
        size={36}
      />
      <ChevronDown
        className="absolute text-white z-20 top-[94%] animate-bounce lg:hidden"
        size={36}
      />
      <ChevronDown
        className="absolute text-white z-20 top-[95%] animate-bounce lg:hidden"
        size={36}
      />
    </div>
  )
}