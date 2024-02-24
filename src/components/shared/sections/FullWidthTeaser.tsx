import Image from 'next/image'
import React from 'react'
import handhsake from '@public/images/marketing/handshake.jpeg'
import Button from '../Button'
import type { FullWidthTeaser as FullWidthTeaserProps } from '@sanity/schemas/blocks/full-width-teaser'

export default function FullWidthTeaser({ title, description }: FullWidthTeaserProps) {
  return (
    <section className="my-md-40 relative my-20 flex min-h-[24rem] w-full flex-col justify-center px-4 py-14">
      <Image
        alt="Mountains"
        src={handhsake}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className="brightness-[0.20]"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="amir-container relative z-20 mx-auto">
        <h3 className="text-h3 mb-6 font-bold text-gray-100">{title}</h3>
        <p className="mb-3 max-w-3xl text-lg text-gray-200">{description}</p>
        <Button theme="secondary" className="text-secondary-100" href="/kontakt">
          Skontaktuj się z nami
        </Button>
      </div>
    </section>
  )
}
