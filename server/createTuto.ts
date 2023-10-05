/* eslint-disable import/prefer-default-export */

'use server'

import { Role } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma/prisma'
import options from '@/app/api/auth/[...nextauth]/options'
import { updatedTuto } from '@/types/types'

export const createTuto = async (data: updatedTuto) => {
  const session = await getServerSession(options)
  if (!session) return { success: false, error: 'Vous devez être connecté' }
  if (!session.user?.email)
    return { success: false, error: 'Vous devez être connecté' }
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email },
  })
  if (!user || user.role === Role.USER)
    return { success: false, error: 'Vous ne pouvez pas créer un tutoriel' }
  const tuto = await prisma.tutorial.create({
    data: {
      ...data,
      authorId: user.id,
    },
  })
  if (tuto) {
    redirect(`/create-tuto/${tuto.id}`)
  }
  return { success: false, error: 'La création du tutorial a échoué' }
}
