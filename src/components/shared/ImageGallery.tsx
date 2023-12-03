'use client'

import Image from 'next/image'

import { prepareImg } from 'lib/prepareImg'
import { type ImageData } from '@sanity/schemas/objects/image-data'
import { useMemo, useState } from 'react'
import { cn } from 'lib/utils'
import useHeader from 'hooks/useHeader'

interface ImageGalleryProps {
  images: ImageData[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0])
  const { isScrollingDown } = useHeader()

  const preparedActiveImage = useMemo(
    () => prepareImg(activeImage, 'Zdjęcie produktu'),
    [activeImage]
  )

  return (
    <div
      className={cn(
        'flex gap-4 sticky transition-all duration-300',
        isScrollingDown ? 'top-6' : 'top-28'
      )}
    >
      <aside className="w-16 flex flex-col gap-4">
        {images.map((image, idx) => {
          const img = prepareImg(image, 'Zdjęcie produktu')
          const isActive = image.asset._ref === activeImage.asset._ref

          return (
            <Image
              onClick={() => setActiveImage(image)}
              key={`${img.source.alt}${idx}`}
              src={img.source.src}
              alt={img.source.alt}
              {...img.dimensions}
              className={cn(
                'object-cover object-center w-full aspect-square rounded-lg shadow-lg transition-all duration-300',
                isActive ? 'ring-1 ring-offset-2  ring-sky-700/20' : 'brightness-50'
              )}
            />
          )
        })}
      </aside>
      <div className="flex-1">
        <Image
          src={preparedActiveImage.source.src}
          alt={preparedActiveImage.source.alt}
          {...preparedActiveImage.dimensions}
          className="object-cover object-center w-full rounded-lg shadow-lg h-[580px]"
        />
      </div>
    </div>
  )
}
