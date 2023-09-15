import React from 'react'
import Image from 'next/image'

type ProvidersBtnProps = {
  onClick: () => void
  src: string
  alt: string
  width: number
  height: number
  name: string
}

export default function ProvidersBtn({
  onClick,
  src,
  alt,
  width,
  height,
  name,
}: ProvidersBtnProps) {
  return (
    <button
      className="text-black w-[100%] h-[50px] flex justify-center items-center border-[#8c8c8c] border rounded-lg bg-[#edebeb] xl:text-sm lg:text-xs"
      type="submit"
      onClick={onClick}
    >
      <Image
        className="mr-2"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
      {name}
    </button>
  )
}
