import { Level, Tutorial } from '@prisma/client'

export type TNavLinks = {
  label: string
  href: string
}

export type TIconsFooter = {
  icon: string

  href: string
}
export type TLinkAuth = {
  icon?: string | undefined
  label: string
  href: string
}

export type TUser = {
  email?: string | null | undefined
  image?: string | null | undefined
  name?: string | null | undefined
}

export type LevelObject = {
  name: Level
  text: string
}

export type updatedTuto = Omit<
  Tutorial,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'authorId'
  | 'published'
  | 'video'
  | 'image'
  | 'publishedAt'
>
