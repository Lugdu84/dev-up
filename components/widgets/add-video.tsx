'use client'

import React, { useRef, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
// import Video from './video'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
// import { Textarea } from '../ui/textarea'

export default function AddVideo() {
  const selectedLink = useRef<HTMLInputElement>(null)

  const getLink = () => {
    const link = selectedLink.current?.value
    if (!link) return
    const linkSplitted = link.split('=')
    const linkFinal = `https://www.youtube.com/embed/${linkSplitted[1]}`
  }

  return (
    <div className="w-full mb-16">
      <div className="w-full flex flex-col items-center">
        {/* Ajout vidéo */}
        <Dialog>
          <DialogTrigger className="w-full mb-5" asChild>
            <Button variant="outline">Ajouter une vidéo</Button>
          </DialogTrigger>
          <DialogContent className="w-11/12">
            <DialogHeader>
              <DialogTitle>Ajouter une vidéo</DialogTitle>
              <DialogDescription>
                Pour ajouter une vidéo Youtube, clique droit sur la vidéo et
                cliquer sur &ldquo;copier l&apos;url de la vidéo&ldquo;
              </DialogDescription>
            </DialogHeader>
            <div className="w-full grid gap-4 py-4">
              <div className="w-full">
                <Input
                  name="src"
                  className="w-full 2xl:text-lg"
                  type="text"
                  placeholder="Lien de la vidéo"
                  ref={selectedLink}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                // onClick={getLink}
                type="button"
                className="my-3 bg-red-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                Annuler
              </Button>
              <Button
                onClick={getLink}
                type="button"
                className="my-3 bg-green-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* <form>
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
      </div> */}
      {/* <div>
        {currentLink ? (
          <Video src={currentLink} title="un titre" />
        ) : (
          <div>Aperçu</div>
        )}
      </div> */}
      {/* Template/preview */}
    </div>
  )
}
