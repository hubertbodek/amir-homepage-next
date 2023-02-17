import Image from 'next/image'
import React from 'react'

import type { ImageModel } from '../../types/ImageModel'

export interface HeroProps {
  image: ImageModel
  title: string
  description?: string
  children?: React.ReactNode
}

export default function Hero({ image, title, description, children }: HeroProps) {
  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-tr from-black/70 to-black" />
      <Image
        src={image.src}
        alt={image.alternativeText}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="amir-container mx-auto h-full flex justify-start items-center">
        <div className="max-w-3xl relative z-20">
          <h1 className="text-h1 text-light mb-6">{title}</h1>
          <p className="text-subtitle text-neutral-300 max-w-xl">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
