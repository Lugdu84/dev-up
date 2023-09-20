import React from 'react'
import Image from 'next/image'

const categories = [
  {
    title: 'Futur apprenant',
    image: '/assets/noob.png',
    description:
      '1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
  {
    title: 'Apprenant',
    image: '/assets/eleve.png',
    description:
      '2) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
  {
    title: 'Junior',
    image: '/assets/developper.png',
    description:
      '3) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
]
export default function UserCategorie() {
  return (
    <div className="w-full mb-10 flex flex-col self-center md:w-3/4 lg:w-full lg:justify-center">
      <div className="bg-slate-200 flex flex-col items-center lg:w-5/6 lg:flex-row lg:justify-center 2xl:w-full">
        {categories.map((categorie) => {
          const { title, image } = categorie
          return (
            <div className="relative border flex flex-col items-center w-full h-full py-10 border-black md:w-full 2xl:w-1/5">
              <div className=" bg-white w-[200px] h-[200px] rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h2 className="text-center text-lg mt-3 cursor-pointer">
                {title}
              </h2>
            </div>
          )
        })}
      </div>
      <div className="2xl:w-full 2xl:flex 2xl:justify-center border border-red-600">
        {/* {categories.map((categorie) => {
          const { description } = categorie 
        return ( */}
        <div className="2xl:w-3/5 border p-5 border-black">
          {/* <p className="absolute">{description}</p> */}
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae
            aliquam nunc nunc eu nunc. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc
            aliquet nunc, vitae aliquam nunc nunc eu nunc. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam
            faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu
            nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae
            aliquam nunc nunc eu nunc.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc
            aliquet nunc, vitae aliquam nunc nunc eu nunc.
          </p>
        </div>
        {/* ) })} */}
      </div>
    </div>
  )
}
