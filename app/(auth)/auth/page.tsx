import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/assets/logo.png'
import Dev from '../../../public/assets/dev.jpg'
import Providers from '@/components/widgets/providers'

type AuthProps = {
  searchParams: {
    query: string
  }
}

export default function Auth({ searchParams: { query } }: AuthProps) {
  return (
    <div className="w-[100%] h-[100%] flex bg-white md:justify-center">
      {/* Partie gauche */}
      <div className="w-[100%] h-auto flex flex-col items-center lg:w-[70%] xl:w-[55%] 2xl:w-[35%]">
        <Link className="w-[15%] mt-5 ml-5 self-start md:w-[10%]" href="/">
          <Image src={Logo} alt="Dev-Up!" />
        </Link>

        {query === 'signin' ? (
          <Providers h1="Heureux de vous revoir" h2="Connectez vous" />
        ) : (
          <Providers h1="C'est partit" h2="Créez un compte" />
        )}

        <Link
          className="text-black mt-[200px] hover:underline lg:text-sm xl:text-lg"
          href={
            query === 'signin' ? '/auth?query=signup' : '/auth?query=signin'
          }
        >
          {query === 'signin' ? 'Pas de compte ?' : 'Déja inscrit ?'}
        </Link>
      </div>
      {/* Partie droite */}
      <div className="hidden h-auto lg:block">
        <Image
          className="w-[100%] h-auto object-cover min-h-screen"
          src={Dev}
          alt=""
        />
      </div>
    </div>
  )
}
