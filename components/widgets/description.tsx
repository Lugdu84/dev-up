'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import React from 'react'

export default function Description() {
  return (
    <div className="w-11/12 flex flex-col-reverse self-center my-10 md:w-3/4 lg:w-3/5 xl:flex-row xl:w-5/6 items-center 2xl:w-3/5">
      <div className="w-full flex flex-col items-center md:items-start mt-6 mx-auto xl:mt-0 mr-10">
        <h2 className="text-2xl font-bold mb-3 xl:mb-6">Qui sommes nous ?</h2>
        <p className="w-full text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          debitis, dignissimos reiciendis autem repellendus maiores distinctio
          quisquam delectus porro. In, excepturi illo minima ipsam mollitia, quo
          atque, repudiandae dolor harum perspiciatis ipsum? Saepe natus ullam
          aliquid voluptates reiciendis delectus explicabo possimus voluptatem
          repellendus sunt quia alias, nemo magnam error fuga quos non
          asperiores deleniti, obcaecati, enim nam incidunt tempore distinctio
          quaerat? Quos eligendi iure eum, repellendus eaque laborum veritatis
          provident a quia! Nesciunt non corporis veritatis nostrum officiis id.
          Fugit est quidem animi nemo aliquid ipsum, voluptatem ab quas
          voluptate numquam itaque deleniti iure error saepe eius ad id sunt?
        </p>
      </div>

      <div className="w-full h-auto">
        <AspectRatio ratio={16 / 9}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </AspectRatio>
      </div>
    </div>
  )
}
