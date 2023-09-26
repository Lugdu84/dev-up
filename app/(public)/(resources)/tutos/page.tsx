import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import CardTuto from '@/components/widgets/card-tuto'
import prisma from '@/lib/prisma/prisma'

export default async function page() {
  const tutos = await prisma.tutorial.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  const APPRENTICE = tutos.filter((obj) => obj.level.includes('APPRENTICE'))
  const NEWBIE = tutos.filter((obj) => obj.level.includes('NEWBIE'))
  const JUNIOR = tutos.filter((obj) => obj.level.includes('JUNIOR'))

  return (
    <div className="mt-[10vh] flex flex-col">
      <section className="container py-8 flex flex-col gap-6">
        <div className="mt-6 space-y-1 cursor-default">
          <h2 className="text-2xl font-semibold tracking-tight">
            TUTORIEL / COURS
          </h2>
          <Link href="/">
            <Button type="button">Ajouter un tuto !</Button>
          </Link>

          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="mt-6 space-y-1 cursor-default">
              <h3 className="text-lg font-semibold tracking-tight">
                FUTUR APPRENANT
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs md:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <Button variant="link" className="px-0">
              Voir Tout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <ScrollArea>
            <div className="flex space-x-4 pb-6">
              {NEWBIE.map((tuto) => (
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
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="mt-6 space-y-1 cursor-default">
              <h3 className="text-lg font-semibold tracking-tight">
                APPRENANT
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs md:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <Button variant="link" className="px-0">
              Voir Tout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {APPRENTICE.map((tuto) => (
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
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="mt-6 space-y-1 cursor-default">
              <h3 className="text-lg font-semibold tracking-tight">JUNIOR</h3>
              <p className="text-sm text-muted-foreground max-w-xs md:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <Button variant="link" className="px-0">
              Voir Tout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {JUNIOR.map((tuto) => (
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
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
      {/* <section className="container py-8">
        <div className="mt-6 space-y-1 cursor-default">
          <h2 className="text-2xl font-semibold tracking-tight">
            QUESTIONS / REPONSES
          </h2>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </section>
      <section className="container py-8">
        <div className="mt-6 space-y-1 cursor-default">
          <h2 className="text-2xl font-semibold tracking-tight">MENTORAT</h2>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </section> */}
    </div>
  )
}
