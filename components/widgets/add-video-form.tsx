'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Video from './video'
// import UploadFilesBox from './uploadFilesBox'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function AddVideoForm() {
  const [currentLink, setCurrentLink] = useState<string | undefined>(undefined)
  const selectedLink = useRef<HTMLInputElement>(null)

  const getLink = () => {
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
      </form> */}
      <div className="w-full mb-5">
        <div className="w-full mb-5">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full" variant="outline">
                Ajouter une vidéo
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[397px]">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">
                    Ajoutez votre URL
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Effectuez un clique droit sur la vidéo, puis cliquez sur
                    &ldquo;copier l&lsquo;url de la vidéo&ldquo;
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <form>
                      <Input
                        name="src"
                        className="w-[360px] 2xl:text-lg"
                        type="text"
                        placeholder="Lien de la vidéo"
                        ref={selectedLink}
                      />
                      <Button
                        onClick={getLink}
                        type="button"
                        className="my-6 bg-green-500 text-lg w-[360px] lg:w-2/5 lg:my-0"
                      >
                        Ajouter
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full" variant="outline">
                Ajouter une image
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[397px]">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">
                    Ajoutez votre image
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <form>
                      <Input
                        name="src"
                        className="w-[360px] 2xl:text-lg"
                        type="text"
                        placeholder=""
                        // ref={selectedLink}
                      />
                      <Button
                        // onClick={getLink}
                        type="button"
                        className="my-6 bg-green-500 text-lg w-[360px] lg:w-2/5 lg:my-0"
                      >
                        Ajouter
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div>
        {currentLink ? (
          <Video src={currentLink} title="un titre" />
        ) : (
          <div className="w-full h-56 flex flex-col items-center justify-center border border-black bg-gray-200">
            <h3 className="text-mg">Vous n&apos;avez aucun média</h3>
            <Image
              className="object-cover mt-5"
              src="/assets/media.png"
              alt="Le lecteur youtube"
              width={60}
              height={60}
            />
          </div>
        )}
      </div>
    </div>
  )
}
