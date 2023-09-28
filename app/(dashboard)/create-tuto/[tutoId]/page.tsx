import React from 'react'
import prisma from '@/lib/prisma/prisma'

type NewTutoProps = {
  params: {
    tutoId: string
  }
}

const getTuto = async (id: string) => {
  const tuto = await prisma?.tutorial.findUnique({
    where: { id },
  })
  return tuto
}

export default async function NewTuto({ params }: NewTutoProps) {
  const tuto = await getTuto(params.tutoId)
  if (!tuto) {
    return <div>error</div>
  }
  return <div>{tuto.title}</div>
}
