'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Logo from '../../../public/assets/logo.png'
import Dev from '../../../public/assets/dev.jpg'
import GitHub from '../../../public/assets/github.svg'
import ProvidersBtn from '@/app/components/Buttons/ProvidersBtn'
import Google from '../../../public/assets/google.svg'
import Providers from '@/app/components/Providers/Providers'

export default function Auth() {
  const [registered, setRegistered] = useState(true)

  const handleGitHub = async () => {
    signIn('github', { callbackUrl: window.location.origin })
  }

  // TODO: Bug provider
  const handleGoogle = () => {
    signIn('google', { callbackUrl: window.location.origin })
  }

  return (
    <div className="w-[100%] h-[100%] flex bg-white md:justify-center">
      {/* Partie gauche */}
      <div className="w-[100%] h-auto flex flex-col items-center lg:w-[70%] xl:w-[55%] 2xl:w-[35%]">
        <Link className="w-[15%] mt-5 ml-5 self-start md:w-[10%]" href="/">
          <Image src={Logo} alt="Dev-Up!" />
        </Link>

        {registered ? (
          <Providers h1="Heureux de vous revoir" h2="Connectez vous">
            <ProvidersBtn
              src={GitHub}
              alt="Logo GitHub"
              width={25}
              height={25}
              name="Se connecter avec GitHub"
              onClick={handleGitHub}
            />
            <ProvidersBtn
              src={Google}
              alt="Logo Google"
              width={25}
              height={25}
              name="Se connecter avec Google"
              onClick={handleGoogle}
            />
          </Providers>
        ) : (
          <Providers h1="C'est partit" h2="Créez un compte">
            <ProvidersBtn
              src={GitHub}
              alt="Logo GitHub"
              width={25}
              height={25}
              name="S'inscire avec GitHub"
              onClick={handleGitHub}
            />
            <ProvidersBtn
              src={Google}
              alt="Logo Google"
              width={25}
              height={25}
              name="S'inscire avec Google"
              onClick={handleGoogle}
            />
          </Providers>
        )}
        <button
          className="text-black mt-[200px] hover:underline lg:text-sm xl:text-lg"
          type="button"
          onClick={() => setRegistered(!registered)}
        >
          {registered ? 'Pas de compte ?' : 'Déja inscrit ?'}
        </button>
      </div>
      {/* Partie droite */}
      <div className="hidden h-auto lg:block">
        <Image
          className="w-[100%] h-auto object-cover min-h-screen"
          src={Dev}
          alt=""
        />
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}
