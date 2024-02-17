'use client'

import { ImageData } from '@sanity/schemas/objects/image-data'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { PreparedImage, prepareImg } from 'lib/prepareImg'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { StaticImageModel } from 'types/StaticImageModel'
import getImageSizes from 'utlis/getImageSizes'

interface ProductCardProps {
  title: string
  url: string
  images: Array<StaticImageModel | ImageData>
  className?: string
  label?: string
  price?: number
}

export default function ProductCard({
  title,
  url,
  images,
  className,
  label,
  price,
}: ProductCardProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const preparedImages = useMemo(
    () => images.map((image) => prepareImg(image, 'Produkt')),
    [images]
  )

  const [currentImage, setCurrentImage] = useState(preparedImages[0])
  const [shouldShowGallery, setShouldShowGallery] = useState(false)

  const showGallery = () => setShouldShowGallery(true)
  const hideGallery = () => setShouldShowGallery(false)

  return (
    <div
      className={`group w-full h-96 transition ${className}`}
      onMouseEnter={isDesktop ? showGallery : undefined}
      onMouseLeave={isDesktop ? hideGallery : undefined}
    >
      <div className="relative h-60 overflow-hidden shadow-lg">
        <Link href={url} title={title}>
          <Image
            src={currentImage.source.src}
            alt={currentImage.source.alt}
            sizes={getImageSizes('95vw', '45vw', '305px')}
            fill
            className="object-cover object-center group-hover:scale-110 transition duration-300 ease-out"
          />
        </Link>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60 group-hover:opacity-50 duration-300 transition pointer-events-none" />
      </div>
      <div className="text-primary mt-3 flex flex-col items-start">
        {shouldShowGallery && preparedImages.length > 1 ? (
          <ImageGallery images={preparedImages} onImageHover={setCurrentImage} />
        ) : (
          label && <span className="text-xs text-orange-700 font-light">{label}</span>
        )}
        <Link href={url} className="inline-block hover:underline mt-2" title={title}>
          {title}
        </Link>
        {price && <span className="font-semibold">{price} zł</span>}
      </div>
    </div>
  )
}

interface ImageGalleryProps {
  images: Array<PreparedImage>
  onImageHover: (image: PreparedImage) => void
}

const ImageGallery = ({ images, onImageHover }: ImageGalleryProps) => {
  const imgs = images.slice(0, 4)

  return (
    <div className="flex w-full items-center gap-x-4">
      {imgs.map((image, index) => {
        return (
          <div key={index} className="flex w-1/4" onMouseEnter={() => onImageHover(image)}>
            <Image
              src={image.source.src}
              alt={image.source.alt}
              width={image.dimensions?.width ?? 50}
              height={image.dimensions?.height ?? 50}
              className="aspect-square object-cover object-center"
            />
          </div>
        )
      })}
    </div>
  )
}
