import Image from 'next/image'
import Link from 'next/link'

import { type ImageData } from '@sanity/schemas/objects/image-data'
import { type StaticImageModel } from 'types/StaticImageModel'
import getImageSizes from 'utlis/getImageSizes'
import { prepareImg } from 'lib/prepareImg'

export interface VerticalOverlayCardProps {
  image: ImageData | StaticImageModel
  title: string
  url?: string
  description?: string
  className?: string
  overlay?: boolean
  children?: React.ReactNode
}

export default function VerticalOverlayCard({
  image,
  title,
  description,
  url = '/',
  className = '',
  children,
  overlay = false,
}: VerticalOverlayCardProps) {
  const img = prepareImg(image, 'Karta')

  return (
    <div
      className={`group relative w-full max-lg:aspect-square lg:h-[486px] overflow-hidden shadow-lg hover:shadow-2xl transition rounded ${className}`}
    >
      <Image
        src={img.source.src}
        alt={img.source.alt}
        sizes={getImageSizes('95vw', '45vw', '305px')}
        fill
        className="object-cover object-center group-hover:scale-110 transition duration-300 ease-out"
      />
      {overlay && (
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900 group-hover:opacity-90 duration-300 transition pointer-events-none" />
      )}
      <div className="h-full w-full absolute top-0 left-0 z-10 flex flex-col items-start justify-end px-5 overflow-hidden py-6">
        <Link
          href={url}
          className="inline-block text-h3 mb-2 text-neutral-100 hover:underline"
          title={title}
        >
          {title}
        </Link>
        <p className="text-gray-300/90">{description}</p>
        {children}
      </div>
    </div>
  )
}
