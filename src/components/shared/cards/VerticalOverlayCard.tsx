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
      className={`group relative w-full overflow-hidden rounded shadow-lg transition hover:shadow-2xl max-lg:aspect-square lg:h-[486px] ${className}`}
    >
      <Image
        src={img.source.src}
        alt={img.source.alt}
        sizes={getImageSizes('95vw', '45vw', '305px')}
        fill
        className="object-cover object-center transition duration-300 ease-out group-hover:scale-110"
      />
      {overlay && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900 transition duration-300 group-hover:opacity-90" />
      )}
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-start justify-end overflow-hidden px-5 py-6">
        <Link
          href={url}
          className="text-h3 mb-2 inline-block text-neutral-100 hover:underline"
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
