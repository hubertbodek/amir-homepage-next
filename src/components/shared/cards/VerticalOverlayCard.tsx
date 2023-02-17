import Image from 'next/image'
import type { ImageModel } from '../../../types/ImageModel'

export interface VerticalOverlayCardProps {
  image: ImageModel
  title: string
  description?: string
  className?: string
  overlay?: boolean
  children?: React.ReactNode
}

export default function VerticalOverlayCard({
  image,
  title,
  description,
  className = '',
  children,
  overlay = false,
}: VerticalOverlayCardProps) {
  return (
    <div
      className={`group relative w-full h-[486px] overflow-hidden shadow-lg hover:shadow-2xl transition rounded ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alternativeText}
        fill
        className="object-cover object-center group-hover:scale-110 transition duration-300 ease-out"
      />
      {overlay && (
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900" />
      )}
      <div className="h-full w-full absolute top-0 left-0 z-10 flex flex-col items-start justify-end px-5 overflow-hidden py-6">
        <span className="inline-block text-h3 mb-2 text-neutral-100">{title}</span>
        <p className="text-gray-300/90">{description}</p>
        {children}
      </div>
    </div>
  )
}
