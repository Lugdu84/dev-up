'use client'

import React, { useState } from 'react'
import Image from 'next/image'

type Category = {
  id: number
  title: string
  image: string
  description: string
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Futur apprenant',
    image: '/assets/noob.png',
    description:
      '1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
  {
    id: 2,
    title: 'Apprenant',
    image: '/assets/eleve.png',
    description:
      '2) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
  {
    id: 3,
    title: 'Junior',
    image: '/assets/developper.png',
    description:
      '3) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
]
export default function UserCategorie() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  )
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (e.key === 'Enter') {
      setSelectedCategory(categories[index])
    }
  }
  return (
    <div className="w-full mb-10 flex flex-col self-center md:w-3/4 lg:w-full lg:justify-center">
      <div className="bg-slate-200 flex flex-col items-center lg:w-5/6 lg:flex-row lg:justify-center 2xl:w-full">
        {categories.map((category, index) => {
          const { title, image, id } = category
          return (
            <div
              key={id}
              className="relative border flex flex-col items-center w-full h-full py-10 border-black md:w-full 2xl:w-1/5"
            >
              <div
                role="button"
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                onClick={() => setSelectedCategory(categories[index])}
                className=" bg-white w-[200px] h-[200px] rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h2 className="text-center text-lg mt-3">{title}</h2>
            </div>
          )
        })}
      </div>
      {selectedCategory && (
        <div className="2xl:w-3/5 2xl:flex p-5 2xl:justify-center 2xl:self-center border border-red-600">
          <p className="w-full">{selectedCategory.description}</p>
        </div>
      )}
    </div>
  )
}
