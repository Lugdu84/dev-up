import React from 'react'
import FormTuto from '@/components/widgets/formTuto'

export default function CreateTuto() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="self-center text-2xl my-10 xl:text-3xl 2xl:text-4xl">
        Nouveau tuto
      </h1>
      <FormTuto />
    </div>
  )
}
