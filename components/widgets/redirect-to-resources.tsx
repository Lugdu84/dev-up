import React from 'react'
import Cardlink from './card-link'

export default function RedirectToResources() {
  return (
    <div className="w-11/12 self-center mt-2 mb-10 md:w-3/4 lg:w-5/6 xl:mb-16 2xl:w-3/5">
      <h2 className="text-lg font-bold mb-6 lg:text-2xl lg:mb-10">
        C&apos;est partit pour le show ! C&apos;est partit le stade est chaud !
      </h2>
      <div className="flex flex-col items-center lg:flex-row justify-center xl:justify-around">
        <Cardlink
          href="/tutos"
          src="/assets/resource.png"
          width={64}
          height={64}
          title="Consulter les tutos"
        />
        <Cardlink
          href="/"
          src="/assets/faq.png"
          width={64}
          height={64}
          title="Foire aux questions"
        />
      </div>
    </div>
  )
}
