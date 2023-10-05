import React from 'react'
import Link from 'next/link'
import { Level } from '@prisma/client'
import { Button } from '@/components/ui/button'
import CardTuto from '@/components/widgets/card-tuto'
import prisma from '@/lib/prisma/prisma'
import LevelsCheckbox from '@/components/widgets/levels-checkbox'

type whereObject = {
  published: boolean
  levels: {
    hasSome: Level[]
  }
  tags?: {
    hasSome: string[]
  }
}

async function getTutos(levels: Level[] | Level, tags: string[] | string) {
  let levelArray
  if (levels instanceof Array) {
    levelArray = levels
  } else if (levels !== undefined) {
    levelArray = [levels]
  }

  let tagsArray
  if (tags instanceof Array) {
    tagsArray = tags
  } else if (tags !== undefined) {
    tagsArray = [tags]
  }

  const whereObj: whereObject = {
    published: true,
    levels: {
      hasSome: levelArray || [Level.NEWBIE, Level.APPRENTICE, Level.JUNIOR],
    },
  }

  if (tagsArray) {
    whereObj.tags = { hasSome: tagsArray }
  }

  const tutos = await prisma.tutorial.findMany({
    where: whereObj,
    orderBy: {
      createdAt: 'asc',
    },
  })
  return tutos
}

type PageTutosProps = {
  searchParams: {
    levels: Level[] | Level
    tags: string[] | string
  }
}

export default async function PageTutos({ searchParams }: PageTutosProps) {
  const { levels, tags } = searchParams
  const tutos = await getTutos(levels, tags)

  return (
    <div className="mt-[10vh] flex flex-col">
      <section className="container py-8 flex flex-col gap-6">
        <div className="mt-6 space-y-1 cursor-default flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            TUTORIEL / COURS
          </h1>
          <Link href="/">
            <Button variant="outline" className="rounded-full">
              Ajouter un tuto !
            </Button>
          </Link>
        </div>
      </section>
      <section className="container py-8 flex flex-col sm:flex-row gap-6">
        <div className="w-80 sm:border-r flex flex-col gap-4">
          <LevelsCheckbox />
        </div>
        <div className="md:ml-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutos.map((tuto) => (
              <CardTuto
                key={tuto.id}
                title={tuto.title}
                description={tuto.description}
                href={tuto.title}
                tags={tuto.tags}
                image={tuto.image}
                video={tuto.video}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
