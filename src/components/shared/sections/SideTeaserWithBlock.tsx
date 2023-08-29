import Image from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'

import { prepareImg } from 'lib/prepareImg'
import { twMerge } from 'tailwind-merge'
import { type ImageData } from '@sanity/schemas/objects/image-data'
import { type StaticImageModel } from 'types/StaticImageModel'
import Button from 'components/shared/Button'

interface SideTeaserWithBlockProps {
  label: string
  title: string
  description: PortableTextBlock[]
  buttonText?: string
  images: ImageData[] | StaticImageModel[]
  reversed?: boolean
}

export default function SideTeaserWithBlock({
  label,
  title,
  description,
  buttonText,
  images,
  reversed = false,
}: SideTeaserWithBlockProps) {
  const singleImage = images.length === 1

  return (
    <section className="amir-container my-16 md:my-32 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 items-center">
      <div
        className={`relative h-60 md:h-96 lg:h-[600px] max-md:order-last ${
          reversed ? 'order-last' : ''
        }`}
      >
        {images.map((image, idx) => {
          const img = prepareImg(image, 'Side Teaser Image')

          return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image
              {...img.source}
              key={`side-teaser-image-${idx}`}
              sizes="500px"
              quality={'quality' in image ? image.quality : 75}
              fill
              className={twMerge(
                'object-cover object-center rounded shadow-lg brightness-75',
                idx !== 0
                  ? '-mt-6 md:-mt-12 -ml-6 md:-ml-12 lg:-ml-0 lg:mr-auto'
                  : 'ml-auto max-md:-mr-6',
                singleImage ? 'max-md:max-w-[100%] max-md:!mx-0' : 'max-w-sm'
              )}
            />
          )
        })}
      </div>
      <div className="flex flex-col items-start md:pl-6">
        <span className="text-orange-800 font-semibold uppercase text-sm">{label}</span>
        <h2 className="text-h2 font-semibold mt-2 mb-8 max-w-lg md:-ml-6">{title}</h2>
        <div className="lg:text-lg text-gray-800 prose prose-slate prose-li:marker:text-sky-800">
          <PortableText value={description} />
        </div>
        {buttonText && (
          <Button className="my-8" theme="primary">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}
