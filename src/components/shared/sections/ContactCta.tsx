import Image from 'next/image'
import Button from 'components/shared/Button'
import { prepareImg } from 'lib/prepareImg'
import { type StaticImageModel } from 'types/StaticImageModel'
import { type ImageData } from '@sanity/schemas/objects/image-data'

interface ContactCtaProps {
  image: ImageData | StaticImageModel
  heading: string
  description: string
}

export default function ContactCta({ image, heading, description }: ContactCtaProps) {
  const img = prepareImg(image, 'Contact Cta Image')

  return (
    <section className="amir-container mx-auto my-40 flex max-md:flex-col gap-x-10">
      <Image
        className="flex-1 rounded object-contain max-md:mb-8"
        src={img.source.src}
        alt={img.source.alt}
        width={img.dimensions?.width}
        height={img.dimensions?.height}
      />
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="text-h2 font-bold mb-5">{heading}</h2>
        <p className="text-xl mb-8">{description}</p>
        <Button theme="primary" href="#contact-form">
          Skontaktuj się z nami
        </Button>
      </div>
    </section>
  )
}
