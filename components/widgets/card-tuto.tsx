import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'

type cardProps = {
  title: string
  description: string
  href: string
  category: string
}
export default function CardTuto({
  title,
  description,
  href,
  category,
}: cardProps) {
  return (
    <div>
      <div className="w-80 mb-2 relative ">
        <Link href={href} className="hover:brightness-90 transition-all">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="https://plus.unsplash.com/premium_photo-1675826927352-e99efbab36d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              fill
              alt={title}
              loading="lazy"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Link>
        <Link
          href="/test"
          className="absolute left-2 top-2 z-10 hover:brightness-105"
        >
          <Badge>{category}</Badge>
        </Link>
      </div>
      <Link href={href}>
        <h3 className="text-base font-medium ml-1">{title}</h3>
      </Link>
      <p className="text-xs text-muted-foreground ml-1">{description}</p>
    </div>
  )
}
