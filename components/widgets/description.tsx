'use client'

import React from 'react'
import YouTube from 'react-youtube'

export default function Description() {
  const videoId = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  const opts = {
    width: '100%',
  }
  return (
    // TODO: Revoir le responsive 1440px
    <div className="w-11/12 flex flex-col-reverse self-center mt-10 mb-10 md:w-3/4 lg:w-3/5 xl:flex-row">
      <div className="w-full flex flex-col mt-6 xl:mt-0 mr-10">
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

      <div className="w-full h-auto xl:">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  )
}
