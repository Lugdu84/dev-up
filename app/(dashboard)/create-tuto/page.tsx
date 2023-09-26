import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/bases/checkbox'
import { createTuto } from '@/actions/createTuto'

export default function CreateTuto() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="self-center text-xl my-10">Nouveau tuto</h1>
      <form action={createTuto} className="w-11/12">
        <Input
          name="title"
          className="w-full"
          type="text"
          placeholder="Votre titre"
          required
        />
        <h2 className="mt-6">Votre niveau (plusieurs choix possibles)</h2>
        <div className="my-2 p-1 flex flex-col">
          <Checkbox name="newbie" text=" newbie" />
          <Checkbox name="apprentice" text=" apprentice" />
          <Checkbox name="junior" text=" junior" />
        </div>
        <h2 className="mt-6">Tags (plusieurs choix possibles)</h2>
        <div className="my-2 p-1 flex flex-col">
          <Checkbox name="html" text=" HTML" />
          <Checkbox name="javascript" text=" JavaScript" />
          <Checkbox name="typescript" text=" Typescript" />
        </div>

        <Textarea
          name="description"
          className="w-full mt-6"
          placeholder="Votre description"
          required
        />
        <Button className="my-6 bg-green-500 text-lg w-full ">Créer</Button>
      </form>
      <Button className="bg-red-500 text-lg w-11/12">Annuler</Button>
    </div>
  )
}
