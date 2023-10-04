'use client'

import React, { useRef, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { DialogClose } from '@radix-ui/react-dialog'
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
import { addVideo } from '@/lib/prisma/tuto'

type AddVideoProps = {
  tutoId: string
}

export default function AddVideo({ tutoId }: AddVideoProps) {
  const selectedLink = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const handleSubmit = () => {
    const link = getLink()
    if (!link) return
    setOpen(false)
    addVideo(link, tutoId)
  }

  const getLink = () => {
    const link = selectedLink.current?.value
    if (!link) {
      setError('Veuillez entrer un lien')
      return
    }
    setError(null)
    const linkSplitted = link.split('=')
    // eslint-disable-next-line consistent-return
    return `https://www.youtube.com/embed/${linkSplitted[1]}`
  }

  const handleCancel = () => {
    setOpen(false)
    setError(null)
  }

  return (
    <div className="w-full mb-16">
      <div className="w-full flex flex-col items-center">
        {/* Ajout vidéo */}
        <Dialog open={open}>
          <DialogTrigger className="w-full mb-5" asChild>
            <Button onClick={() => setOpen(true)} variant="outline">
              Ajouter une vidéo
            </Button>
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
              {error && <div className="w-full text-red-500">{error}</div>}
            </div>
            <DialogFooter className="flex gap-4">
              <Button
                onClick={handleCancel}
                type="button"
                className="my-3 bg-red-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                Annuler
              </Button>
              <Button
                onClick={handleSubmit}
                type="submit"
                className="my-3 bg-green-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                Ajouter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
