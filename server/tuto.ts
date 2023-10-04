'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma/prisma'

// eslint-disable-next-line import/prefer-default-export
export const addVideo = async (url: string, id: string) => {
  await prisma.tutorial.update({
    where: { id },
    data: { video: url, image: null },
  })
  revalidatePath(`/tutos/${id}`)
}

export const addImage = async (file: string, id: string) => {
  await prisma.tutorial.update({
    where: { id },
    data: { image: file, video: null },
  })
  revalidatePath(`/tutos/${id}`)
}
