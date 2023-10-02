/* eslint-disable react/no-array-index-key */
import React from 'react'
import prisma from '@/lib/prisma/prisma'
import AddVideoForm from '@/components/widgets/add-video-form'

type NewTutoProps = {
  params: {
    tutoId: string
  }
}

const getTuto = async (id: string) => {
  const tuto = await prisma?.tutorial.findUnique({
    where: { id },
  })
  return tuto
}

export default async function NewTuto({ params }: NewTutoProps) {
  const tuto = await getTuto(params.tutoId)
  if (!tuto) {
    return <div>error</div>
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-11/12 md:w-7/12 lg:w-4/12 xl:w-3/12">
        <h1 className="w-full text-center font-bold text-xl my-8">
          {tuto.title}
        </h1>
        <div className="flex border border-gray-500 rounded-xl bg-gray-200 p-2 min-h-[50px] shadow-md shadow-gray-300">
          <h2 className="underline">Niveau de difficulté:</h2>
          <ul className="ml-4">
            {tuto.level.map((level: string, index: number) => (
              <li key={index}>{level}</li>
            ))}
          </ul>
        </div>
        <div className="flex my-6  border border-gray-500 rounded-xl bg-gray-200 p-2 shadow-md shadow-gray-300">
          <h2 className="underline">Catégories relatives:</h2>
          <ul className="ml-4">
            {tuto.tags.map((tag: string, index: number) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className=" border border-gray-500 rounded-xl bg-gray-200 p-2 shadow-md shadow-gray-300">
          <h2 className="mb-2 underline">Description du tuto:</h2>
          {tuto.description}
        </div>
      </div>
      <span className="w-11/12 border border-gray-500 my-10 md:w-7/12 lg:w-4/12 xl:w-3/12" />
      <div className="w-11/12 md:w-7/12 lg:w-4/12 xl:w-3/12">
        <h2 className="w-full text-center text-lg mb-8 font-bold">
          Ajout de média
        </h2>
        <AddVideoForm />
        {/* <UploadFilesBox /> */}
      </div>
    </div>
  )
}
