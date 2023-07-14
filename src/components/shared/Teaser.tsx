import Image from 'next/image'
import React from 'react'

import type { StaticImageModel } from '../../types/StaticImageModel'
import { type ImageData } from '@sanity/schemas/objects/image-data'
import { prepareImg } from 'lib/prepareImg'

export interface HeroProps {
  image: StaticImageModel | ImageData
  label: string
  title: string
}

export default function Hero({ image, title, label }: HeroProps) {
  const img = prepareImg(image, 'Zdjęcie główne oferty')

  return (
    <div className="relative w-full h-[480px]">
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-tr from-black/70 to-black" />
      <Image
        src={img.source.src}
        alt={img.source.alt}
        sizes="100vw"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="amir-container mx-auto h-full flex justify-start items-center">
        <div className="max-w-3xl relative z-20 text-left mt-20">
          <span className="text-gray-400 inline-block mb-3 max-md:text-sm uppercase">{label}</span>
          <h1 className="text-h1 text-light mb-6">{title}</h1>
        </div>
      </div>
    </div>
  )
}
