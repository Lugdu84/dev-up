'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/bases/checkbox'
import { createTuto } from '@/actions/createTuto'
import { ErrorsTuto } from '@/types/types'

const defaultErrors: ErrorsTuto = {
  title: '',
  desc: '',
  tags: '',
  level: '',
}

export default function FormTuto() {
  const [errors, setErrors] = useState<ErrorsTuto>(defaultErrors)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const result = await createTuto(formData)

    if (result) {
      setErrors(result)
    } else {
      setErrors(defaultErrors)
    }
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      setErrors({ ...errors, title: '' })
    } else {
      setErrors({ ...errors, title: 'Veuillez définir un titre' })
    }
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value) {
      setErrors({ ...errors, desc: '' })
    } else {
      setErrors({ ...errors, desc: 'Veuillez définir une description' })
    }
  }

  console.log(errors)
  // T'es surveillé !! MDR J'ai vu ça !!!

  const router = useRouter()
  const handleCancel = () => {
    router.push('/')
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
      {errors.title && (
        <div className="text-sm text-red-500 mt-1 ml-1">{errors.title}</div>
      )}
      <h2 className="mt-6">Votre niveau (plusieurs choix possibles)</h2>
      <div className="my-2 p-1 flex flex-col">
        <Checkbox name="newbie" text=" newbie" />
        <Checkbox name="apprentice" text=" apprentice" />
        <Checkbox name="junior" text=" junior" />
      </div>
      {errors.level && (
        <div className="text-sm text-red-500 ml-1">{errors.level}</div>
      )}
      <h2 className="mt-6">Tags (plusieurs choix possibles)</h2>
      <div className="my-2 p-1 flex flex-col">
        <Checkbox name="html" text=" HTML" />
        <Checkbox name="javascript" text=" JavaScript" />
        <Checkbox name="typescript" text=" Typescript" />
        <Checkbox name="tailwind" text=" Tailwind" />
      </div>
      {errors.tags && (
        <div className="text-sm text-red-500 ml-1">{errors.tags}</div>
      )}
      <Textarea
        name="description"
        className="w-full mt-6 2xl:text-lg"
        placeholder="Votre description"
        onChange={handleChangeDescription}
      />
      {errors.desc && (
        <div className="text-sm text-red-500 mt-1 ml-1">{errors.desc}</div>
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
