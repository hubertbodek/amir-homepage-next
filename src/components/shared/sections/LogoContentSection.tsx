import Image from 'next/image'

import type { LogoContentSectionProps } from '@sanity/schemas/blocks/logo-content-section'
import logo from '@public/images/logo.png'
import { prepareImg } from 'lib/prepareImg'

export default function LogoContentSection({
  heading,
  image,
  paragraphs,
}: LogoContentSectionProps) {
  const img = prepareImg(image, 'Główne zdjęcie')

  return (
    <section className="amir-container my-20 md:my-40">
      <div className="flex flex-col items-center mx-auto justify-center gap-x-3">
        {heading && <h2 className="text-h2 font-bold text-blue-950">{heading}</h2>}
        <div className="bg-blue-950 p-2 w-fit rounded">
          <div className="aspect-[256/62] relative h-9">
            <Image src={logo} alt="Logo" fill />
          </div>
        </div>
      </div>
      <Image
        src={img.source.src}
        alt={img.source.alt}
        width={img.dimensions?.width}
        height={img.dimensions?.height}
        className="mx-auto max-h-[30rem] object-cover rounded"
      />
      <div className="columns-2">
        {paragraphs?.map((paragraph, idx) => (
          <>
            <h3 key={`heading--${idx}`} className="text-h3 font-bold text-primary">
              {paragraph.heading}
            </h3>
            <p key={`paragraph--${idx}`} className="text-subtitle max-w-prose text-gray-800">
              {paragraph.body}
            </p>
          </>
        ))}
      </div>
    </section>
  )
}
