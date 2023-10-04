'use client'

import React from 'react'
import { Pencil } from 'lucide-react'
import { Level } from '@prisma/client'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import Checkbox from '@/components/ui/checkbox'

import { ALL_TAGS, ALL_LEVELS } from '@/lib/constants'
import { Label } from '../ui/label'

type EditTutoHeaderProps = {
  title: string
  description: string
  levels: Level[]
  tags: string[]
}

export default function editTutoHeader({
  title,
  description,
  levels,
  tags,
}: EditTutoHeaderProps) {
  const isChecked = (name: string, array: string[]) => {
    const test = array.filter((element) => element === name)
    return test.length > 0
  }
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full mb-5" asChild>
          <Pencil size={25} className="mt-2 hover:text-red-500" />
        </DialogTrigger>
        <DialogContent className="w-11/12">
          <DialogHeader>
            <DialogTitle>Modifier les informations</DialogTitle>
            <DialogDescription>
              Vous pouvez modifier votre titre, le(s) niveau(x), ainsi que le(s)
              tag(s)
            </DialogDescription>
          </DialogHeader>
          <div className="w-full grid gap-4 py-4">
            <div className="w-full">
              <h2 className="mb-4 text-lg">Votre titre :</h2>
              <Input
                name="title"
                className="w-full 2xl:text-lg"
                type="text"
                placeholder="Votre titre"
                // onChange={handleChangeTitle}
                value={title}
              />
            </div>
            <div>
              <h2 className="mt-6">
                Votre niveau (plusieurs choix possibles) :
              </h2>
              <div className="my-2 p-1 flex flex-col">
                {ALL_LEVELS.map((level) => (
                  <div
                    key={level.name}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <Checkbox
                      id={level.name}
                      name={level.name}
                      defaultChecked={isChecked(level.name, levels)}
                    />
                    <Label htmlFor={level.name}>{level.name}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mt-6">Tags (plusieurs choix possibles) :</h2>
              <div className="my-2 p-1 flex flex-col">
                {ALL_TAGS.map((tag) => (
                  <div
                    key={tag.name}
                    className="flex items-center space-x-2  mb-2"
                  >
                    <Checkbox
                      id={tag.name}
                      name={tag.name}
                      defaultChecked={isChecked(tag.name, tags)}
                    />
                    <Label htmlFor={tag.name}>{tag.name}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mt-6">Votre description :</h2>
              <Textarea
                name="description"
                className="w-full mt-6 2xl:text-lg"
                placeholder="Votre description"
                // onChange={handleChangeDescription}
                value={description}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              // onClick={getLink}
              type="button"
              className="my-3 bg-red-500 text-lg w-full lg:w-2/5 lg:my-0"
            >
              Annuler
            </Button>
            <Button
              //   onClick={getLink}
              type="button"
              className="my-3 bg-green-500 text-lg w-full lg:w-2/5 lg:my-0"
            >
              Modifier
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
