import React from 'react'
import Image from 'next/image'

// type Categorie = {
//   title: string
//   image: string
//   description: string
// }

const categories = [
  {
    title: 'Futur apprenant',
    image: '/assets/noob.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
  {
    title: 'Apprenant',
    image: '/assets/eleve.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
  {
    title: 'Junior',
    image: '/assets/developper.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam faucibus, nunc nunc aliquet nunc, vitae aliquam nunc nunc eu nunc.',
  },
]
function UserCategorie() {
  return (
    <div className=" bg-red-100 m-10 p-10 flex flex-row space-x-10">
      {categories.map((categorie) => {
        const { title, image, description } = categorie
        return (
          <div className="bg-blue-100 p-5 flex flex-col items-center space-y-2">
            <div className=" bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center">
              <Image
                src={image}
                alt={title}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <h2 className="text-center">{title}</h2>
            <p className="hidden">{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default UserCategorie
