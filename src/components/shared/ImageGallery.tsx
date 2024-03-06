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
        'sticky flex flex-col gap-4 transition-all duration-300 lg:flex-row',
        isScrollingDown ? 'top-6' : 'top-28'
      )}
    >
      <aside className="flex h-full gap-4 max-lg:order-last max-lg:-mx-4 max-lg:overflow-x-scroll max-lg:border-b max-lg:border-b-black/10 max-lg:px-4 max-lg:py-3 max-lg:shadow-lg lg:h-[580px] lg:w-16 lg:flex-col">
        {images.map((image, idx) => {
          const img = prepareImg(image, 'Zdjęcie produktu')
          const isActive = image.asset?._ref === activeImage.asset?._ref

          return (
            <Image
              onClick={() => setActiveImage(image)}
              key={`${img.source.alt}${idx}`}
              src={img.source.src}
              alt={img.source.alt}
              {...img.dimensions}
              className={cn(
                'aspect-square cursor-pointer rounded-lg object-cover object-center shadow-lg transition-all duration-300 max-lg:w-16',
                isActive ? 'ring-1 ring-sky-700/20  ring-offset-2' : 'brightness-50'
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
          className="w-full rounded-lg object-cover object-center shadow-lg max-lg:aspect-square lg:h-[580px]"
        />
      </div>
    </div>
  )
}
