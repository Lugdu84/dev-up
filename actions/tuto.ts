'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma/prisma'

// eslint-disable-next-line import/prefer-default-export
export const addVideo = async (url: string, id: string) => {
  const tuto = await prisma.tutorial.update({
    where: { id },
    data: { video: url, image: null },
  })
  console.log('tuto in server actions', tuto)
  revalidatePath(`/tutos/${id}`)
}
