'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma/prisma'
import { updatedTuto } from '@/types/types'

// eslint-disable-next-line import/prefer-default-export
export const addVideo = async (url: string, id: string) => {
  await prisma.tutorial.update({
    where: { id },
    data: { video: url, image: null },
  })
  revalidatePath(`/tutos/${id}`)
}

export const addImage = async (image: string, id: string) => {
  await prisma.tutorial.update({
    where: { id },
    data: { image, video: null },
  })
  revalidatePath(`/tutos/${id}`)
}

export const updateTuto = async (data: updatedTuto, id: string) => {
  await prisma.tutorial.update({
    where: { id },
    data,
  })
  revalidatePath(`/tutos/${id}`)
}
