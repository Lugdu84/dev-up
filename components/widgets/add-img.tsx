'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function addImg() {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="w-full mb-5" asChild>
          <Button variant="outline">Ajouter une image</Button>
        </DialogTrigger>
        <DialogContent className="w-11/12">
          <DialogHeader>
            <DialogTitle>Ajouter une image</DialogTitle>
            <DialogDescription>
              Renseigner l&apos;URLde l&apos;image
            </DialogDescription>
          </DialogHeader>
          <div className="w-full grid gap-4 py-4">
            <div className="w-full">
              <Input
                name="src"
                className="w-full 2xl:text-lg"
                type="text"
                placeholder="URL de l'image"
                //   ref={selectedLink}
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
              // onClick={getLink}
              type="button"
              className="my-3 bg-green-500 text-lg w-full lg:w-2/5 lg:my-0"
            >
              Ajouter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
