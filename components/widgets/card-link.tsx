import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type CardlinkProps = {
  href: string
  src: string
  alt: string
  width: number
  height: number
  title: string
}

export default function Cardlink({
  href,
  src,
  alt,
  width,
  height,
  title,
}: CardlinkProps) {
  return (
    <div
      className="w-full h-40 flex flex-col justify-center border bg-slate-100 border-slate-400 mb-6 rounded-2xl 
          shadow-md shadow-gray-400 hover:scale-105 md:w-2/4 lg:w-[380px] lg:mb-0"
    >
      <Link href={href} className="flex flex-col items-center">
        <Image
          className="mb-3 object-cover"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
        <h3 className="lg:text-xl">{title}</h3>
      </Link>
    </div>
  )
}
