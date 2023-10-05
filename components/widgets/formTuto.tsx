'use client'

import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Level } from '@prisma/client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import { createTuto } from '@/server/createTuto'
import { ALL_TAGS, ALL_LEVELS, INITIAL_ERROR } from '@/lib/constants'
import { Label } from '@/components/ui/label'
import { updatedTuto } from '@/types/types'

export default function FormTuto() {
  const [errors, setErrors] = useState(INITIAL_ERROR)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const newTuto = useRef<updatedTuto>({
    title: '',
    description: '',
    levels: [],
    tags: [],
  })

  const validateNewTuto = () => {
    let newErrors = { ...errors }

    if (!newTuto.current.title) {
      newErrors = { ...newErrors, errorTitle: 'Veuillez définir un titre' }
    }
    if (!newTuto.current.description) {
      newErrors = {
        ...newErrors,
        errorDescription: 'Veuillez définir une description',
      }
    }
    if (newTuto.current.tags.length === 0) {
      newErrors = {
        ...newErrors,
        errorTags: 'Veuillez choisir un ou plusieurs tag(s)',
      }
    }
    if (newTuto.current.levels.length === 0) {
      newErrors = {
        ...newErrors,
        errorLevels: 'Veuillez choisir un ou plusieurs niveau(x)',
      }
    }

    return newErrors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validateNewTuto()
    setErrors(newErrors)

    const hasNoError = Object.values(newErrors).every((value) => value === '')

    if (!hasNoError) {
      return
    }
    setIsLoading(true)
    await createTuto(newTuto.current)
    setIsLoading(false)
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      newTuto.current.title = e.currentTarget.value
      setErrors({ ...errors, errorTitle: '' })
    } else {
      setErrors({ ...errors, errorTitle: 'Veuillez définir un titre' })
    }
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value) {
      newTuto.current.description = e.currentTarget.value
      setErrors({ ...errors, errorDescription: '' })
    } else {
      setErrors({
        ...errors,
        errorDescription: 'Veuillez définir une description',
      })
    }
  }

  const handleCheckedTag = (checked: CheckedState, name: string) => {
    if (checked) {
      newTuto.current.tags.push(name)
    } else {
      newTuto.current.tags = newTuto.current.tags.filter((tag) => tag !== name)
    }
    if (newTuto.current.tags.length === 0) {
      setErrors({
        ...errors,
        errorTags: 'Veuillez choisir un ou plusieurs tag(s)',
      })
    } else {
      setErrors({ ...errors, errorTags: '' })
    }
  }

  const handleCheckedLevel = (checked: CheckedState, name: Level) => {
    if (checked) {
      newTuto.current.levels.push(name)
    } else {
      newTuto.current.levels = newTuto.current.levels.filter(
        (level) => level !== name,
      )
    }
    if (newTuto.current.levels.length === 0) {
      setErrors({
        ...errors,
        errorLevels: 'Veuillez choisir un ou plusieurs niveau(x)',
      })
    } else {
      setErrors({ ...errors, errorLevels: '' })
    }
  }

  const handleCancel = () => {
    router.push('/tutos')
  }

  if (isLoading) {
    return <div>Création du tutoriel en cours...</div>
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 md:w-2/5 lg:w-1/4 2xl:text-lg 2xl:flex 2xl:flex-col"
    >
      <Input
        name="title"
        className="w-full 2xl:text-lg"
        type="text"
        placeholder="Votre titre"
        onChange={handleChangeTitle}
      />
      {errors.errorTitle && (
        <div className="text-sm text-red-500 mt-1 ml-1">
          {errors.errorTitle}
        </div>
      )}
      <h2 className="mt-6">Votre niveau (plusieurs choix possibles)</h2>
      <div className="my-2 p-1 flex flex-col">
        {ALL_LEVELS.map((level) => (
          <div key={level.name} className="flex items-center space-x-2 mb-2">
            <Checkbox
              id={level.name}
              name={level.name}
              defaultChecked={false}
              onCheckedChange={(checked) =>
                handleCheckedLevel(checked, level.name)
              }
            />
            <Label htmlFor={level.name}>{level.name}</Label>
          </div>
        ))}
        {errors.errorLevels && (
          <div className="text-sm text-red-500 mt-1 ml-1">
            {errors.errorLevels}
          </div>
        )}
      </div>
      <h2 className="mt-6">Tags (plusieurs choix possibles)</h2>
      <div className="my-2 p-1 flex flex-col">
        {ALL_TAGS.map((tag) => (
          <div key={tag.name} className="flex items-center space-x-2  mb-2">
            <Checkbox
              id={tag.name}
              name={tag.name}
              defaultChecked={false}
              onCheckedChange={(checked) => handleCheckedTag(checked, tag.name)}
            />
            <Label htmlFor={tag.name}>{tag.name}</Label>
          </div>
        ))}
        {errors.errorTags && (
          <div className="text-sm text-red-500 mt-1 ml-1">
            {errors.errorTags}
          </div>
        )}
      </div>
      <Textarea
        name="description"
        className="w-full mt-6 2xl:text-lg"
        placeholder="Votre description"
        onChange={handleChangeDescription}
      />
      {errors.errorDescription && (
        <div className="text-sm text-red-500 mt-1 ml-1">
          {errors.errorDescription}
        </div>
      )}
      <div className="flex flex-col w-full lg:flex-row lg:justify-around lg:mt-20 2xl:w-3/4 2xl:self-center">
        <Button
          type="submit"
          className="my-6 bg-green-500 text-lg w-full lg:w-2/5 lg:my-0"
        >
          Créer
        </Button>
        <Button
          onClick={handleCancel}
          className="bg-red-500 text-lg w-full lg:w-2/5"
        >
          Annuler
        </Button>
      </div>
    </form>
  )
}
