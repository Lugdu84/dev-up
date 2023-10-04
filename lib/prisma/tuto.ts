'use server'

import prisma from '@/lib/prisma/prisma'

// eslint-disable-next-line import/prefer-default-export
export const addVideo = async (url: string, id: string) => {
  const tuto = await prisma.tutorial.update({
    where: { id },
    data: { video: url, image: null },
  })
  console.log('tuto', tuto)
}
