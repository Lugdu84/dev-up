import Image from 'next/image'
import Video from '@/components/widgets/video'
import { AspectRatio } from '../ui/aspect-ratio'

type TutoAssetProps = {
  video: string | null
  image: string | null
  title: string
}

export default function TutoAsset({ video, image, title }: TutoAssetProps) {
  return (
    <div>
      {video && <Video title={title} src={video} />}
      {image && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={`https://utfs.io/f/${image}`}
            fill
            alt={title}
            loading="lazy"
            className="object-cover"
          />
        </AspectRatio>
      )}
    </div>
  )
}
