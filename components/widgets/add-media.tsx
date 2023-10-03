'use client'

import React, { useRef } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
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
import { Textarea } from '../ui/textarea'

export default function AddMedia() {
  // const [currentLink, setCurrentLink] = useState<string | undefined>(undefined)
  const selectedLink = useRef<HTMLInputElement>(null)

  const getLink = () => {
    // Je veux récupérer dans https://youtu.be/LKAQ5LNut8s?si=iod0iJ-Nbs3O3Alw la partie LKAQ5LNut8s
    // const link = selectedLink.current?.value
    // if (!link) return
    // const linkSplitted = link.split('/')
    // const linkId = linkSplitted[linkSplitted.length - 1]
    // const linkIdSplitted = linkId.split('?')
    // const linkIdFinal = linkIdSplitted[0]
    // const linkFinal = `https://www.youtube.com/embed/${linkIdFinal}`
    // setCurrentLink(linkFinal)
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
                // onClick={getLink}
                type="button"
                className="my-3 bg-gray-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                Modifier
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
        <h3 className="mb-5">OU</h3>
        {/* Ajout Image */}
        <Dialog>
          <DialogTrigger className="w-full mb-5" asChild>
            <Button variant="outline">Ajouter une image</Button>
          </DialogTrigger>
          <DialogContent className="w-11/12">
            <DialogHeader>
              <DialogTitle>Ajouter une image</DialogTitle>
              <DialogDescription>
                Pour une capture de code, vous pouvez utiliser :
                <Link
                  className="hover:underline"
                  href="https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false"
                >
                  {' '}
                  Carbon
                </Link>
              </DialogDescription>
            </DialogHeader>
            <div className="w-full grid gap-4 py-4">
              <div className="w-full">
                <Input
                  name="src"
                  className="w-full 2xl:text-lg"
                  type="text"
                  placeholder="URL de l'image"
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
                // onClick={getLink}
                type="button"
                className="my-3 bg-gray-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                Modifier
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
        {/* Ajouter du texte */}
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
            <div className="w-full grid gap-4 py-4">
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
                // onClick={getLink}
                type="button"
                className="my-3 bg-gray-500 text-lg w-full lg:w-2/5 lg:my-0"
              >
                Modifier
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
