'use client'

import React from 'react'
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

import { Textarea } from '../ui/textarea'

export default function addText() {
  return (
    <div className="w-full md:w-1/2 lg:w-52">
      <Dialog>
        <DialogTrigger className="w-full mb-5" asChild>
          <Button variant="outline">Ajouter du texte</Button>
        </DialogTrigger>
        <DialogContent className="w-11/12">
          <DialogHeader>
            <DialogTitle>Ajouter du texte</DialogTitle>
            <DialogDescription>
              Ajouter le contenu de votre article
            </DialogDescription>
          </DialogHeader>
          <div className="w-full py-4">
            <div className="w-full">
              <Textarea />
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
              //   onClick={getLink}
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
