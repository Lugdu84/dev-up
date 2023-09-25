'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Category = {
  id: number
  title: string
  image: string
  description: string
  borderColor: string
  bg: string
  hover: string
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Futur apprenant',
    image: '/assets/noob.png',
    description:
      '1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
    borderColor: 'border border-lime-200',
    bg: 'bg-lime-200',
    hover: 'hover:bg-lime-200',
  },
  {
    id: 2,
    title: 'Apprenant',
    image: '/assets/eleve.png',
    description:
      '2) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
    borderColor: 'border border-yellow-200',
    bg: 'bg-yellow-200',
    hover: 'hover:bg-yellow-200',
  },
  {
    id: 3,
    title: 'Junior',
    image: '/assets/developper.png',
    description:
      '3) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
    borderColor: 'border border-red-200',
    bg: 'bg-red-200',
    hover: 'hover:bg-red-200',
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

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="w-full mb-10 flex flex-col self-center md:w-3/4 lg:w-full lg:justify-center">
      <div className="bg-slate-200 flex flex-col items-center lg:w-full lg:self-center lg:flex-row lg:justify-center 2xl:w-full">
        {categories.map((category, index) => {
          const { title, image, description, id, borderColor, bg, hover } =
            category
          const isSelected = selectedCategory === category
          return (
            <div
              key={id}
              role="button"
              onKeyDown={(e) => handleKeyDown(e, index)}
              tabIndex={0}
              className={cn(
                `relative ${
                  isSelected && borderColor
                } ${hover} flex flex-col items-center w-full h-full py-10 lg:w-1/4 2xl:w-1/5`,
                isSelected && bg,
              )}
              onClick={() => handleCategoryClick(category)}
            >
              <div className=" bg-white w-[200px] h-[200px] rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h2 className="text-center text-lg mt-3">{title}</h2>
              {isSelected && (
                <div className={`${bg} w-full lg:hidden p-5`}>
                  <p className="w-full">{description}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {selectedCategory && (
        <div
          className={`${selectedCategory.bg} hidden rounded-b-2xl shadow-md lg:w-3/4 lg:flex p-5 lg:justify-center lg:self-center 2xl:w-3/5`}
        >
          <p className="w-full">{selectedCategory.description}</p>
        </div>
      )}
    </div>
  )
}
