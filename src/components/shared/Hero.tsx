import Image from 'next/image'
import React from 'react'

import type { StaticImageModel } from '../../types/StaticImageModel'
import { cn } from 'lib/utils'

export interface HeroProps {
  image: StaticImageModel
  title: string
  label?: string
  description?: string
  children?: React.ReactNode
}

export default function Hero({ image, title, label, description, children }: HeroProps) {
  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-tr from-black/70 to-black" />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        quality={50}
        className="object-cover object-center blur-sm"
        priority
      />
      <div
        className={cn(
          'amir-container mx-auto h-full flex justify-start items-center',
          label ? 'pt-20' : 'pt-10'
        )}
      >
        <div className="max-w-6xl relative z-20">
          {label && (
            <span className="text-sky-300 inline-block mb-3 max-md:text-sm uppercase">{label}</span>
          )}
          <h1 className="text-h1 text-light mb-6 line-clamp-2">{title}</h1>
          <p className="text-subtitle text-neutral-300 max-w-xl line-clamp-4">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
