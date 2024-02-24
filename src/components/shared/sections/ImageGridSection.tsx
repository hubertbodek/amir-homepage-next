import type { ImageGridSection as ImageGridSectionProps } from '@sanity/schemas/blocks/image-grid-section'
import { prepareImg } from 'lib/prepareImg'
import Image from 'next/image'
import React from 'react'

export default function ImageGridSection({ title, description, images }: ImageGridSectionProps) {
  return (
    <section className="amir-container my-md-40 my-20 py-14">
      <h3 className="text-h3 mb-4 text-center font-bold">{title}</h3>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg">{description}</p>
      <div className="grid grid-cols-12 grid-rows-2 gap-4">
        {images.map((image, index) => {
          const img = prepareImg(image, '')
          const imgOptions = imagesSpan[index]

          return (
            <div
              key={image.asset._ref}
              className={`relative h-64 bg-slate-500 ${imgOptions.cn} ${
                index > 2 && 'hidden md:block'
              }`}
            >
              <Image
                src={img.source.src}
                alt={img.source.alt}
                fill
                sizes={imgOptions.size}
                className="object-cover"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

const wide = {
  cn: 'col-span-12 md:col-span-6',
  size: '30vw',
}

const small = {
  cn: 'col-span-6 md:col-span-3',
  size: '20vw',
}

const imagesSpan: Record<number, { cn: string; size: string }> = {
  0: wide,
  1: small,
  2: small,
  3: small,
  4: wide,
  5: small,
}
