'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
import ProvidersBtn from './providers-btn'

type Provider = {
  src: string
  alt: string
  name: string
  onClick: () => Promise<void>
}

type ProvidersProps = {
  h1: string
  h2: string
}

export default function Providers({
  h1,
  h2,
}: ProvidersProps): React.ReactElement {
  const handleGitHub = async () => {
    signIn('github', { callbackUrl: window.location.origin })
  }

  // TODO: Bug provider
  const handleGoogle = async () => {
    signIn('google', { callbackUrl: window.location.origin })
  }

  const providers: Provider[] = [
    {
      src: 'assets/github.svg',
      alt: 'Logo GitHub',
      name: 'Avec GitHub',
      onClick: handleGitHub,
    },
    {
      src: 'assets/google.svg',
      alt: 'Logo Google',
      name: 'Avec Google',
      onClick: handleGoogle,
    },
  ]

  return (
    <div className="w-[80%] h-auto flex flex-col mt-48 md:w-[40%] lg:w-[60%]">
      <h1 className="text-black mb-[5px] text-2xl font-black md:text-l xl:text-3xl">
        {h1}
      </h1>
      <h2 className="text-black text-lg">{h2}</h2>
      <div className="w-[100%] h-[120px] mt-[30px] flex flex-col justify-between">
        {providers.map((provider) => {
          const { src, alt, name, onClick } = provider
          return (
            <ProvidersBtn
              src={src}
              alt={alt}
              width={25}
              height={25}
              name={name}
              onClick={onClick}
            />
          )
        })}
      </div>
    </div>
  )
}
