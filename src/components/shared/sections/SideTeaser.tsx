import Image from 'next/image'

import { prepareImg } from 'lib/prepareImg'
import { twMerge } from 'tailwind-merge'
import { type ImageData } from '@sanity/schemas/objects/image-data'
import { type StaticImageModel } from 'types/StaticImageModel'
import { handleBreakLine } from 'lib/break-line'
import Button from 'components/shared/Button'

interface SideTeaserProps {
  label: string
  title: string
  description: string
  buttonText?: string
  images: ImageData[] | StaticImageModel[]
  reversed?: boolean
}

export default function SideTeaser({
  label,
  title,
  description,
  buttonText,
  images,
  reversed = false,
}: SideTeaserProps) {
  const singleImage = images.length === 1

  return (
    <section className="amir-container overflow-hidden my-16 md:my-32 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 items-center">
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
              sizes="384px"
              fill
              quality={image.quality ?? 75}
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
        <h2 className="text-h2 font-semibold mt-2 mb-8 max-w-xl md:-ml-6">{title}</h2>
        <p className="lg:text-lg text-gray-800">{handleBreakLine(description)}</p>
        {buttonText && (
          <Button className="my-8" theme="primary" href="/kontakt">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}
