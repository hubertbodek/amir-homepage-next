import Image from 'next/image'
import React from 'react'

import type { ImageModel } from '../../types/ImageModel'

export interface HeroProps {
  image: ImageModel
  title: string
  description?: string
  specific?: boolean
  faded?: boolean
  children?: React.ReactNode
}

export default function Hero({
  image,
  title,
  description,
  specific = false,
  faded = false,
  children,
}: HeroProps) {
  return (
    <div className={`relative w-full ${specific ? 'h-96' : 'h-[600px]'}`}>
      {faded ? (
        <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
      ) : (
        <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-tr from-black/70 to-black"></div>
      )}
      <Image
        src={image.src}
        alt={image.alternativeText}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="amir-container mx-auto h-full flex justify-start items-center">
        <div className={`max-w-3xl relative z-20 ${specific ? 'mx-auto text-center mt-12' : ''}`}>
          <h1 className={`text-h1 text-light mb-6 ${specific ? '' : ''}`}>{title}</h1>
          <p className="text-subtitle text-neutral-300 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eos laudantium
            inventore ea. Veritatis, adipisci.
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}
