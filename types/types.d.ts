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

export type ErrorsTuto = {
  title: string
  desc: string
  tags: string
  level: string
}
