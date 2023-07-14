import type { ImageGridSection as ImageGridSectionProps } from '@sanity/schemas/blocks/image-grid-section'
import { prepareImg } from 'lib/prepareImg'
import Image from 'next/image'
import React from 'react'

export default function ImageGridSection({ title, description, images }: ImageGridSectionProps) {
  return (
    <section className="amir-container py-14 my-20 my-md-40">
      <h3 className="text-h3 font-bold text-center mb-4">{title}</h3>
      <p className="max-w-3xl text-lg mx-auto text-center mb-10">{description}</p>
      <div className="grid grid-cols-12 grid-rows-2 gap-4">
        {images.map((image, index) => {
          const img = prepareImg(image, '')
          const imgOptions = imagesSpan[index]

          return (
            <div key={image.asset._ref} className={`relative h-64 bg-slate-500 ${imgOptions.cn}`}>
              <Image src={img.source.src} alt={img.source.alt} fill sizes={imgOptions.size} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

const imagesSpan: Record<number, { cn: string; size: string }> = {
  0: {
    cn: 'col-span-6',
    size: '30vw',
  },
  1: {
    cn: 'col-span-3',
    size: '20vw',
  },
  2: {
    cn: 'col-span-3',
    size: '20vw',
  },
  3: {
    cn: 'col-span-3',
    size: '20vw',
  },
  4: {
    cn: 'col-span-6',
    size: '30vw',
  },
  5: {
    cn: 'col-span-3',
    size: '20vw',
  },
}
