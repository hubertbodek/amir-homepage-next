import Image from 'next/image'
import React from 'react'

import Button from 'components/shared/Button'
import type { StaticImageModel } from '../../types/StaticImageModel'
import { type ImageData } from '@sanity/schemas/objects/image-data'
import { prepareImg } from 'lib/prepareImg'
import { cn } from 'lib/utils'

export interface HeroProps {
  image: StaticImageModel | ImageData
  label: string
  title: string
  href?: string
  description?: string
  centered?: boolean
  fluid?: boolean
  children?: React.ReactNode
}

export default function Hero({
  image,
  title,
  href,
  description,
  label,
  centered,
  fluid,
  children,
}: HeroProps) {
  const img = prepareImg(image, 'Zdjęcie główne oferty')

  return (
    <div className={cn('relative w-full', fluid ? 'min-h-[480px] pt-24 pb-16' : 'h-[480px]')}>
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-tr from-black/80 to-black" />
      <Image
        src={img.source.src}
        alt={img.source.alt}
        sizes="100vw"
        fill
        quality={50}
        className="object-cover object-center"
        priority
      />
      <div className="amir-container mx-auto h-full flex justify-start items-center">
        <div
          className={cn(
            'relative z-20 text-left mt-20',
            centered && 'mx-auto',
            fluid ? 'max-w-6xl' : 'max-w-3xl'
          )}
        >
          <span className="inline-block mb-3 max-md:text-sm uppercase text-sky-300">{label}</span>
          <h1 className="text-h1 text-light mb-6">{title}</h1>
          {description && (
            <p className="text-subtitle text-light max-w-prose line-clamp-4 mb-8">{description}</p>
          )}
          {href && (
            <Button theme="light" href={href} className="px-10">
              Czytaj
            </Button>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}
