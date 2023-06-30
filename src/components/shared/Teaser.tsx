import Image from 'next/image'
import React from 'react'

import type { ImageModel } from '../../types/ImageModel'

export interface HeroProps {
  image: ImageModel
  label: string
  title: string
}

export default function Hero({ image, title, label }: HeroProps) {
  const isImageTypeofString = typeof image.src === 'string'

  return (
    <div className="relative w-full h-[480px]">
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-tr from-black/70 to-black" />
      <Image
        src={image.src}
        alt={image.alternativeText}
        fill
        placeholder={!isImageTypeofString ? 'blur' : undefined}
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
