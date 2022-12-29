import Image from 'next/image'
import React from 'react'

import heroImg from '@/public/images/marketing/perforation.webp'
import Button from './Button'
import { ImageModel } from '../types/ImageModel'

export interface TeaserProps {
  image: ImageModel
  title: string
  description?: string
  specific?: boolean
  children?: React.ReactNode
}

export default function Teaser({
  image,
  title,
  description,
  specific = false,
  children,
}: TeaserProps) {
  return (
    <div className={`relative w-full ${specific ? 'h-96' : 'h-[600px]'}`}>
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-tr from-primary/90 to-primary-100"></div>
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
