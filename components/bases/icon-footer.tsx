import React from 'react'
import { Github, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TIconsFooter } from '@/types/types'

const Icons: Record<string, React.ReactNode> = {
  youtube: <Youtube strokeWidth={1.2} />,
  github: <Github strokeWidth={1.2} />,
  linkedin: <Linkedin strokeWidth={1.2} />,
}

export default function IconFooter({ icon, href }: TIconsFooter) {
  return (
    <Link href={href} target="_blank" prefetch={false}>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full opacity-50 hover:opacity-100 transition"
      >
        {Icons[icon]}
      </Button>
    </Link>
  )
}
