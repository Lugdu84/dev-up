'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import React from 'react'

type videoProps = {
  src: string
  title: string
}

export default function Video({ src, title }: videoProps) {
  return (
    <div className="w-full h-auto">
      <AspectRatio ratio={16 / 9}>
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  )
}
