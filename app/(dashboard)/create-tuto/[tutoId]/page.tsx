/* eslint-disable react/no-array-index-key */
import React from 'react'
import Image from 'next/image'
import prisma from '@/lib/prisma/prisma'
import TutoHeader from '@/components/widgets/tuto-header'
import AddVideo from '@/components/widgets/add-video'
import Video from '@/components/widgets/video'

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
  const { title, video, level, tags, id } = tuto

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* <div className="w-11/12">
        <h1 className="w-full text-center text-xl my-8">{tuto.title}</h1>
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
      </div> */}
      <span className="w-11/12 border border-gray-500 my-10" />
      <div className="w-11/12">
        <h2 className="w-full text-center text-lg mb-8">Ajouter un média</h2>
        <AddVideo tutoId={id} />
      </div>
      {/* Preview */}
      <div className="w-11/12 border p-4 border-black">
        <TutoHeader title={title} levels={level} tags={tags} />
        {!video ? (
          <div className="border border-gray-500 bg-gray-200 h-64 flex flex-col items-center justify-center">
            <h3 className="mb-8">Votre média</h3>
            <Image
              src="/assets/media.png"
              alt="Un média"
              width={60}
              height={60}
            />
          </div>
        ) : (
          <Video title={title} src={video} />
        )}

        <div className="w-full flex flex-col">
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
            aperiam. Harum consectetur perspiciatis ducimus est deleniti fugit
            recusandae culpa facilis eveniet animi cum ipsa accusamus, alias
            provident pariatur corrupti similique quod.
          </p>
          <p className="mt-4">
            Hic exercitationem voluptates recusandae aperiam tempora voluptas
            maiores aut pariatur, consequatur reiciendis placeat, consectetur
            voluptatum necessitatibus adipisci? Magni, explicabo?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nisi
            ea esse obcaecati voluptate amet! Facilis, molestiae! Quis,
            eligendi. Quod nihil corporis, unde voluptatum repellat eum magnam
            est cupiditate non.
          </p>
        </div>
      </div>
    </div>
  )
}
