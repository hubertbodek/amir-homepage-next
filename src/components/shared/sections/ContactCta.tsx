import Image from 'next/image'
import Button from 'components/shared/Button'

interface ContactCtaProps {
  image: {
    src: string
    width: number
    height: number
  }
  heading: string
  description: string
}

export default function ContactCta({ image, heading, description }: ContactCtaProps) {
  return (
    <section className="amir-container mx-auto my-40 flex gap-x-10">
      <Image
        className="flex-1 rounded"
        src={image.src}
        width={image.width}
        height={image.height}
        alt="Handshake"
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
