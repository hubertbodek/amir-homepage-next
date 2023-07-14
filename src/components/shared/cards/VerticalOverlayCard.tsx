import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageModel } from '../../../types/StaticImageModel'
import getImageSizes from 'utlis/getImageSizes'

export interface VerticalOverlayCardProps {
  image: StaticImageModel
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
  return (
    <Link href={url} className="h-full w-full">
      <div
        className={`group relative w-full h-[486px] overflow-hidden shadow-lg hover:shadow-2xl transition rounded ${className}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          sizes={getImageSizes('95vw', '45vw', '305px')}
          fill
          className="object-cover object-center group-hover:scale-110 transition duration-300 ease-out"
        />
        {overlay && (
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900 group-hover:opacity-80 duration-300 transition" />
        )}
        <div className="h-full w-full absolute top-0 left-0 z-10 flex flex-col items-start justify-end px-5 overflow-hidden py-6">
          <span className="inline-block text-h3 mb-2 text-neutral-100">{title}</span>
          <p className="text-gray-300/90">{description}</p>
          {children}
        </div>
      </div>
    </Link>
  )
}
