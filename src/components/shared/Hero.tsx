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
    <div className="relative h-[600px] w-full">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-tr from-black/70 to-black" />
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
          'amir-container mx-auto flex h-full items-center justify-start',
          label ? 'pt-20' : 'pt-10'
        )}
      >
        <div className="relative z-20 max-w-6xl">
          {label && (
            <span className="mb-3 inline-block uppercase text-sky-300 max-md:text-sm">{label}</span>
          )}
          <h1 className="text-h1 mb-6 line-clamp-3 text-light">{title}</h1>
          <p className="text-subtitle line-clamp-4 max-w-xl text-neutral-300">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
