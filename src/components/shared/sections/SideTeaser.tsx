import Image from 'next/image'

import { type ImageData } from '@sanity/schemas/objects/image-data'
import { type StaticImageModel } from 'types/StaticImageModel'
import { prepareImg } from 'lib/prepareImg'
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
              sizes="384px"
              fill
              className={`object-cover max-w-sm object-center rounded shadow-lg ${
                idx === 0
                  ? '-mt-6 md:-mt-12 -ml-6 md:-ml-12 lg:-ml-0 lg:mr-auto'
                  : 'ml-auto max-md:-mr-6'
              }`}
            />
          )
        })}
      </div>
      <div className="flex flex-col items-start md:pl-6">
        <span className="text-orange-700 uppercase text-sm">{label}</span>
        <h2 className="text-h2 font-semibold mt-2 mb-8 max-w-lg md:-ml-6">{title}</h2>
        <p className="lg:text-lg text-gray-800">{description}</p>
        {buttonText && (
          <Button className="my-8" theme="primary">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}
