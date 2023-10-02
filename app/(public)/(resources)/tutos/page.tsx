import React from 'react'
// import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import CardTuto from '@/components/widgets/card-tuto'
import prisma from '@/lib/prisma/prisma'
// import Combobox from '@/components/ui/combobox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default async function page() {
  const tutos = await prisma.tutorial.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  // const APPRENTICE = tutos.filter((obj) => obj.level.includes('APPRENTICE'))
  const NEWBIE = tutos.filter((obj) => obj.level.includes('NEWBIE'))
  // const JUNIOR = tutos.filter((obj) => obj.level.includes('JUNIOR'))

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  )

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
      <section className="container py-8 flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Liste des articles</h2>
        <div className="flex">
          <div className="w-80 border-r hidden md:flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-lg mb-2 font-medium">Level</p>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Futur apprenant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Apprenant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Junior</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-medium leading-none">
                Catégories
              </h4>
              <ScrollArea className="h-72 w-full rounded-md">
                <div className="pr-4">
                  {tags.map((tag) => (
                    <>
                      <div key={tag} className="text-sm">
                        {tag}
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
          <div className="md:ml-6 w-full">
            {/* <div className="flex gap-2 flex-wrap"> */}
            {/* <Combobox />
              <Combobox /> */}
            {/* <Button variant="outline" className="rounded-full">
            Ajouter un tuto !
            </Button>
            <Button variant="outline" className="rounded-full">
            Ajouter un tuto !
            </Button>
            <Button variant="outline" className="rounded-full">
            Ajouter un tuto !
            </Button>
            <Button variant="outline" className="rounded-full">
            Ajouter un tuto !
          </Button> */}
            {/* </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>
      {/* <div className="flex flex-col gap-6">
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
        </div> */}
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
