import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'

type cardProps = {
  title: string
  description: string
  href: string
  image?: string | null
  video?: string | null
  tags: Array<string>
}
export default function CardTuto({
  title,
  description,
  href,
  tags,
  image,
  video,
}: cardProps) {
  return (
    <>
      <article className="overflow-hidden rounded-lg w-80 shadow transition hover:shadow-lg">
        <Link href={`tuto/${href}`} className="w-full h-56">
          <AspectRatio ratio={16 / 9}>
            {video ? (
              <div className="h-0 overflow-hidden pt-[56.25%] relative w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <Image
                src={
                  image ||
                  'https://plus.unsplash.com/premium_photo-1675826927352-e99efbab36d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
                }
                fill
                alt={title}
                loading="lazy"
                className="object-cover"
              />
            )}
          </AspectRatio>
        </Link>
        <div className="bg-white p-2 sm:p-4 flex flex-col gap-1">
          <div className="flex gap-0.5 flex-wrap">
            {tags.map((tag) => (
              <Link key={tag} href={`tag/${tag}`} className="">
                <Badge className="text-xs font-light">{tag}</Badge>
              </Link>
            ))}
          </div>
          <Link href={`tuto/${href}`} className="mt-1 flex-1">
            <h3 className="text-lg">{title}</h3>
          </Link>
          <p className="text-sm text-muted-foreground ml-1 cursor-default flex-1">
            {description}
          </p>
        </div>
      </article>
    </>
  )
}
