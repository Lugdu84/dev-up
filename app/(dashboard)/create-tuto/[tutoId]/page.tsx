/* eslint-disable react/no-array-index-key */
import React from 'react'
import Image from 'next/image'
import prisma from '@/lib/prisma/prisma'
import TutoHeader from '@/components/widgets/tuto-header'
import AddVideo from '@/components/widgets/add-video'
import AddText from '@/components/widgets/add-text'
import EditTutoHeader from '@/components/widgets/edit-tuto-header'
import AddImage from '@/components/widgets/add-image'
import TutoAsset from '@/components/widgets/tuto-asset'

type NewTutoProps = {
  params: {
    tutoId: string
  }
}

const getTuto = async (id: string) => {
  const tuto = await prisma?.tutorial.findUnique({
    where: { id },
    include: {
      contents: true,
    },
  })
  return tuto
}

export default async function NewTuto({ params }: NewTutoProps) {
  const tuto = await getTuto(params.tutoId)
  console.log('tuto', tuto)
  if (!tuto) {
    return <div>error</div>
  }
  const { title, video, levels, tags, description, image, id } = tuto

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 flex flex-col items-center fixed bg-white z-10 border-b-2 border-black md:w-2/4 lg:w-11/12 lg:flex-row">
        <h2 className="w-full text-center text-lg my-4">Ajouter un média</h2>
        {/* Todo: Flex-row fonctionne pas */}
        <div className="w-full flex flex-col items-center border border-black lg:flex-row">
          <AddVideo tutoId={id} />
          <AddImage tutoId={id} image={image} />
          <AddText />
        </div>
      </div>
      {/* Preview */}
      <div className="w-11/12 border p-4 mt-72 border-black md:w-2/4">
        <div className=" relative">
          <TutoHeader title={title} levels={levels} tags={tags} />
          <div className="absolute right-0 top-6">
            <EditTutoHeader
              description={description}
              title={title}
              levels={levels}
              tags={tags}
              id={id}
            />
          </div>
          {!video && !image ? (
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
            <TutoAsset title={title} video={video} image={image} />
          )}
        </div>

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
