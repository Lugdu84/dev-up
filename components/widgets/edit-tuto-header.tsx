'use client'

import React, { ChangeEvent, useRef, useState } from 'react'
import { Pencil } from 'lucide-react'
import { Level } from '@prisma/client'
import { CheckedState } from '@radix-ui/react-checkbox'
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
  id: string
}

export default function editTutoHeader({
  title,
  description,
  levels,
  tags,
  id,
}: EditTutoHeaderProps) {
  const tutoRef = useRef({
    title,
    description,
    levels,
    tags,
  })
  const [open, setOpen] = useState(false)
  const [error, setError] = useState({
    errorTitle: '',
    errorDescription: '',
    errorLevels: '',
    errorTags: '',
  })
  const isChecked = (name: string, array: string[]) => {
    const test = array.filter((element) => element === name)
    return test.length > 0
  }

  const handleSubmit = () => {
    const hasNoError = Object.values(error).every((value) => value === '')
    // si hasError return
    // si !hasError on envoie tout à la base de donnée
    if (!hasNoError) {
      return
    }
    console.log(hasNoError)
    setOpen(false)
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    tutoRef.current.title = e.currentTarget.value
    if (e.currentTarget.value === '') {
      setError({ ...error, errorTitle: 'Veuillez saisir un titre' })
    } else {
      setError({ ...error, errorTitle: '' })
    }
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    tutoRef.current.description = e.currentTarget.value
    if (e.currentTarget.value === '') {
      setError({
        ...error,
        errorDescription: 'Veuillez saisir une description',
      })
    } else {
      setError({ ...error, errorDescription: '' })
    }
  }

  const handleCheckedLevel = (checked: CheckedState, name: Level) => {
    if (checked) {
      tutoRef.current.levels.push(name)
    } else {
      tutoRef.current.levels = tutoRef.current.levels.filter(
        (level) => level !== name,
      )
    }
    if (tutoRef.current.levels.length === 0) {
      setError({
        ...error,
        errorLevels: 'Veuillez choisir un ou plusieurs niveau(x)',
      })
    } else {
      setError({ ...error, errorLevels: '' })
    }
  }

  const handleCheckedTag = (checked: CheckedState, name: string) => {
    if (checked) {
      tutoRef.current.tags.push(name)
    } else {
      tutoRef.current.tags = tutoRef.current.tags.filter((tag) => tag !== name)
    }
    if (tutoRef.current.tags.length === 0) {
      setError({
        ...error,
        errorTags: 'Veuillez choisir un ou plusieurs tag(s)',
      })
    } else {
      setError({ ...error, errorTags: '' })
    }
  }

  return (
    <>
      <Dialog open={open}>
        <DialogTrigger
          className="w-full mb-5"
          onClick={() => setOpen(true)}
          asChild
        >
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
                onChange={handleChangeTitle}
                defaultValue={title}
              />
              {error.errorTitle && <div>{error.errorTitle}</div>}
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
                      onCheckedChange={(checked) =>
                        handleCheckedLevel(checked, level.name)
                      }
                    />
                    <Label htmlFor={level.name}>{level.name}</Label>
                  </div>
                ))}
                {error.errorLevels && <div>{error.errorLevels}</div>}
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
                      onCheckedChange={(checked) =>
                        handleCheckedTag(checked, tag.name)
                      }
                    />
                    <Label htmlFor={tag.name}>{tag.name}</Label>
                  </div>
                ))}
                {error.errorTags && <div>{error.errorTags}</div>}
              </div>
            </div>
            <div>
              <h2 className="mt-6">Votre description :</h2>
              <Textarea
                name="description"
                className="w-full mt-6 2xl:text-lg"
                placeholder="Votre description"
                onChange={handleChangeDescription}
                defaultValue={description}
              />
              {error.errorDescription && (
                <div className="border border-red-600">
                  {error.errorDescription}
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => setOpen(false)}
              type="button"
              className="my-3 bg-red-500 text-lg w-full lg:w-2/5 lg:my-0"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSubmit}
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
