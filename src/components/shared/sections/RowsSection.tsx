import Image from 'next/image'

import type { ImageData } from '@sanity/schemas/objects/image-data'
import { prepareImg } from 'lib/prepareImg'

interface RowsSectionProps {
  title: string
  rows: Row[]
}

interface Row {
  title: string
  items: Array<{
    image: ImageData
    subtitle: string
  }>
}

export default function RowsSection({ title, rows }: RowsSectionProps) {
  return (
    <section className="my-20 md:my-40 bg-white py-20">
      <h3 className="text-h3 block amir-container mb-10 font-bold text-blue-950">{title}</h3>
      {rows.map((row, i) => (
        <div key={`row--${i}`} className="amir-container grid grid-cols-fluid gap-y-8 gap-x-6">
          <h4 className="col-span-full text-h4 text-orange-950 font-semibold mt-12 -mb-6">
            {row.title}
          </h4>
          {row.items.map((rowItem, i) => {
            const img = prepareImg(rowItem.image, 'Row Item Image')

            return (
              <div key={i}>
                <div className="h-28">
                  <Image
                    src={img.source.src}
                    alt={img.source.alt}
                    width={img.dimensions?.width}
                    height={img.dimensions?.height}
                    className="h-full w-auto mx-auto object-center"
                  />
                </div>
                <p className="text-center">{rowItem.subtitle}</p>
              </div>
            )
          })}
        </div>
      ))}
    </section>
  )
}
