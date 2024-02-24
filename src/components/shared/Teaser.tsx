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
    <div className={cn('relative w-full', fluid ? 'min-h-[480px] pb-16 pt-24' : 'h-[480px]')}>
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-tr from-black/80 to-black" />
      <Image
        src={img.source.src}
        alt={img.source.alt}
        sizes="100vw"
        fill
        quality={50}
        className="object-cover object-center"
        priority
      />
      <div className="amir-container mx-auto flex h-full items-center justify-start">
        <div
          className={cn(
            'relative z-20 mt-20 text-left',
            centered && 'mx-auto',
            fluid ? 'max-w-6xl' : 'max-w-3xl'
          )}
        >
          <span className="mb-3 inline-block uppercase text-sky-300 max-md:text-sm">{label}</span>
          <h1 className="text-h1 mb-6 text-light">{title}</h1>
          {description && (
            <p className="text-subtitle mb-8 line-clamp-4 max-w-prose text-light">{description}</p>
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
