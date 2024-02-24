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
    <section className="my-20 bg-white py-20 md:my-40">
      <h3 className="text-h3 amir-container mb-10 block font-bold text-blue-950">{title}</h3>
      {rows.map((row, i) => (
        <div key={`row--${i}`} className="amir-container grid grid-cols-fluid gap-x-6 gap-y-8">
          <h4 className="text-h4 col-span-full mt-12 font-semibold text-orange-950">{row.title}</h4>
          {row.items.map((rowItem, i) => {
            const img = prepareImg(rowItem.image, 'Row Item Image')

            return (
              <div key={i}>
                <div className="mb-4 h-36">
                  <Image
                    src={img.source.src}
                    alt={img.source.alt}
                    width={img.dimensions?.width}
                    height={img.dimensions?.height}
                    className="mx-auto h-full w-auto object-center"
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
