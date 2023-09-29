'use client'

import React, { useRef, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Video from './video'

export default function AddVideoForm() {
  const [currentLink, setCurrentLink] = useState<string | undefined>(undefined)
  const selectedLink = useRef<HTMLInputElement>(null)

  const getLink = () => {
    // Je veux récupérer dans https://youtu.be/LKAQ5LNut8s?si=iod0iJ-Nbs3O3Alw la partie LKAQ5LNut8s

    const link = selectedLink.current?.value
    if (!link) return
    const linkSplitted = link.split('/')
    const linkId = linkSplitted[linkSplitted.length - 1]
    const linkIdSplitted = linkId.split('?')
    const linkIdFinal = linkIdSplitted[0]
    const linkFinal = `https://www.youtube.com/embed/${linkIdFinal}`

    setCurrentLink(linkFinal)
  }
  return (
    <div className="w-full mb-16">
      <form>
        <Input
          name="src"
          className="w-full 2xl:text-lg"
          type="text"
          placeholder="Lien de la vidéo"
          ref={selectedLink}
        />
        <Button
          onClick={getLink}
          type="button"
          className="my-6 bg-green-500 text-lg w-full lg:w-2/5 lg:my-0"
        >
          Ajouter
        </Button>
      </form>
      <div>
        {currentLink ? (
          <Video src={currentLink} title="un titre" />
        ) : (
          <div>Aperçu</div>
        )}
      </div>
    </div>
  )
}
