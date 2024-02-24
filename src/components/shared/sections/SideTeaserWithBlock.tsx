import Image from 'next/image'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'

import { prepareImg } from 'lib/prepareImg'
import { type ImageData } from '@sanity/schemas/objects/image-data'
import { type StaticImageModel } from 'types/StaticImageModel'
import Button from 'components/shared/Button'
import { cn } from 'lib/utils'

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
    <section className="amir-container my-16 grid grid-cols-1 items-center gap-x-6 gap-y-8 md:my-32 md:grid-cols-2">
      <div
        className={`relative h-60 max-md:order-last md:h-96 lg:h-[600px] ${
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
              className={cn(
                'rounded object-cover object-center shadow-lg brightness-75',
                idx !== 0
                  ? '-ml-6 -mt-6 max-lg:hidden md:-ml-12 md:-mt-12 lg:-ml-0 lg:mr-auto'
                  : 'ml-auto',
                singleImage ? 'max-md:!mx-0 max-md:max-w-[100%]' : 'max-w-sm'
              )}
            />
          )
        })}
      </div>
      <div className="flex flex-col items-start md:pl-6">
        <span className="text-sm font-semibold uppercase text-orange-800">{label}</span>
        <h2 className="text-h2 mb-8 mt-2 max-w-lg font-semibold md:-ml-6">{title}</h2>
        <div className="prose prose-slate text-gray-800 prose-li:marker:text-sky-800 lg:text-lg">
          <PortableText value={description} />
        </div>
        {buttonText && (
          <Button className="my-8" theme="primary" href="/kontakt">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}
