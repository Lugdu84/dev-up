import type { TIconsFooter, TNavLinks, TLinkAuth } from '@/types/types'

const currentYear = new Date().getFullYear()
export const NAVBAR_LINKS: Array<TNavLinks> = [
  {
    label: 'Tutos',
    href: '/tutos',
  },
  {
    label: 'Link 2',
    href: '/',
  },
  {
    label: 'Link 3',
    href: '/',
  },
]

export const SITEMETA = {
  title: 'DEV-UP',
  description:
    "La plateforme d'entraide pour les développeurs, faite par des développeurs. Que vous envisagiez ou que vous soyez en formation, jeunes diplômés, retrouvez toutes les ressources dont vous avez besoin pour monter en compétence, un accompagnement et une communauté de passionnés. L'entraide est le coeur de Dev-Up! Rejoignez nous sans plus attendre.",
}

const IconsFooter: Array<TIconsFooter> = [
  {
    icon: 'youtube',
    href: 'https://www.youtube.com',
  },
  {
    icon: 'github',
    href: 'https://www.github.com',
  },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com',
  },
]

const FOOTER_LINKS: Array<TNavLinks> = [
  {
    label: 'À propos',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
  {
    label: 'Privacy Policy',
    href: '/',
  },
]

export const FOOTER = {
  copyright: `© ${currentYear} DEVUP. Tous droits réservés.`,
  icons: IconsFooter,
  navigate: FOOTER_LINKS,
}

export const LINKAUTH: Array<TLinkAuth> = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: 'notifications',
    label: 'Notifications',
    href: '/',
  },
  {
    icon: 'profile',
    label: 'Profile',
    href: '/',
  },
]
