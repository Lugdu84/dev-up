/* eslint-disable import/prefer-default-export */

'use server'

import { Level, Role } from '@prisma/client'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma/prisma'
import options from '@/app/api/auth/[...nextauth]/options'

type tag = 'typescript' | 'javascript' | 'html'

export const createTuto = async (e: FormData) => {
  const session = await getServerSession(options)
  if (!session) return
  const title = e.get('title')?.toString()
  const description = e.get('description')?.toString()
  const typescript = e.get('typescript')?.toString()
  const html = e.get('html')?.toString()
  const javascript = e.get('javascript')?.toString()
  const newbie = e.get('newbie')?.toString()
  const apprentice = e.get('apprentice')?.toString()
  const junior = e.get('junior')?.toString()
  if (!title || !description) return
  const tags: tag[] = []
  const level: Level[] = []
  if (typescript) tags.push('typescript')
  if (html) tags.push('html')
  if (javascript) tags.push('javascript')
  if (newbie) level.push(Level.NEWBIE)
  if (apprentice) level.push(Level.APPRENTICE)
  if (junior) level.push(Level.JUNIOR)

  if (!session.user?.email) return
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email },
  })
  if (!user || user.role === Role.USER) return
  const tuto = await prisma.tutorial.create({
    data: {
      title,
      description,
      tags,
      level,
      authorId: user.id,
    },
  })
  console.log('tuto =', tuto)
}
