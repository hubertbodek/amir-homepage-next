import Image from 'next/image'

import { prepareImg } from 'lib/prepareImg'
import { cn } from 'lib/utils'
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
    <section className="amir-container my-16 grid grid-cols-1 items-center gap-x-6 gap-y-8 overflow-hidden md:my-32 md:grid-cols-2">
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
        <h2 className="text-h2 mb-8 mt-2 max-w-xl font-semibold md:-ml-6">{title}</h2>
        <p className="text-gray-800 lg:text-lg">{handleBreakLine(description)}</p>
        {buttonText && (
          <Button className="my-8" theme="primary" href="/kontakt">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}
