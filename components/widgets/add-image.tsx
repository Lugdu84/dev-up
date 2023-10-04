'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
// eslint-disable-next-line import/extensions
import '@uploadthing/react/styles.css'
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
import { addFile, addFileFromUrl } from '@/server/uploadthing'
import { addImage } from '@/server/tuto'

type AddVideoProps = {
  tutoId: string
}

export default function AddImage({ tutoId }: AddVideoProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!previewUrl) {
      setError('Vous devez ajouter une image')
      return
    }
    setIsLoading(true)
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await addFile(formData)
    console.log(response.url)
    await addImage(response.url!, tutoId)
    setIsLoading(false)
    setOpen(false)
    reset()
  }

  const reset = () => {
    setOpen(false)
    setPreviewUrl(null)
    setError(null)
  }

  const handleCancel = () => {
    reset()
  }

  const handleInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length !== 1) {
      setError('Vous devez ajouter une image')
      return
    }
    const newFile = e.target.files[0]
    setPreviewUrl(URL.createObjectURL(newFile))
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
              <form id="inputForm" onSubmit={handleSubmit}>
                <input
                  type="file"
                  name="file"
                  onChange={handleInputFileChange}
                />
              </form>

              <Image
                src={previewUrl || '/assets/media.png'}
                alt="preview upload image"
                width={100}
                height={60}
              />
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
                form="inputForm"
                disabled={!previewUrl}
                className="my-3 bg-green-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                {isLoading ? 'Upload...' : 'Ajouter'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
