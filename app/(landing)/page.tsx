import { getServerSession } from 'next-auth/next'
import options from '../api/auth/[...nextauth]/options'
import prisma from '@/lib/prisma/prisma'

export default async function Home() {
  const session = await getServerSession(options)
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })
    console.log(user)
  }

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-4xl font-bold">
        Let&apos;s go to create a beautiful app with next.js !
      </h1>
    </main>
  )
}
