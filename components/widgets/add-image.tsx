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

type AddVideoProps = {
  tutoId: string
}

export default function AddImage({ tutoId }: AddVideoProps) {
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const handleSubmit = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
    setError(null)
  }

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center">
        {/* Ajout vidéo */}
        <Dialog open={open}>
          <DialogTrigger className="w-full mb-5" asChild>
            <Button onClick={() => setOpen(true)} variant="outline">
              Ajouter une image
            </Button>
          </DialogTrigger>
          <DialogContent className="w-11/12">
            <DialogHeader>
              <DialogTitle>Ajouter une image</DialogTitle>
              <DialogDescription>
                Pour ajouter une vidéo Youtube, clique droit sur la vidéo et
                cliquer sur &ldquo;copier l&apos;url de la vidéo&ldquo;
              </DialogDescription>
            </DialogHeader>
            <div className="w-full grid gap-4 py-4">
              <div className="w-full">IMAGE</div>
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
