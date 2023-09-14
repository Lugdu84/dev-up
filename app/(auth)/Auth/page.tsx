'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import Dev from '../../../public/dev.jpg'

export default function Auth() {
  const [registered, setRegistered] = useState(true)
  return (
    <div className="w-[100%] flex bg-white">
      {/* Partie gauche */}
      <div className="w-[40%] flex flex-col items-center ">
        <Link className="w-[12%] mt-5 ml-5 self-start" href="/">
          <Image src={Logo} alt="Dev-Up!" />
        </Link>

        {registered ? (
          <div className="w-[70%] flex flex-col mt-[200px]">
            <h1 className="text-black mb-[5px] text-3xl font-black">
              Heureux de vous revoir
            </h1>
            <h2 className="text-black text-lg">Connectez vous</h2>
            <div className="w-[100%] h-[200px] mt-[30px] border-solid border-red-500 border">
              {/* Providers */}
            </div>
          </div>
        ) : (
          <div className="w-[70%] flex flex-col mt-[200px]">
            <h1 className="text-black mb-[5px] text-3xl font-black">
              C&apos;est partit
            </h1>
            <h2 className="text-black text-lg">Créez un compte</h2>
            <div className="w-[100%] h-[200px] mt-[30px] border-solid border-red-500 border">
              {/* Providers */}
            </div>
          </div>
        )}
        <button
          className="text-black mt-[200px] hover:underline"
          type="button"
          onClick={() => setRegistered(!registered)}
        >
          {registered ? 'Pas de compte ?' : 'Déja inscrit ?'}
        </button>
      </div>
      {/* Partie droite */}
      <div>
        <Image
          className="w-[100%] object-cover min-h-screen"
          src={Dev}
          alt=""
        />
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}
