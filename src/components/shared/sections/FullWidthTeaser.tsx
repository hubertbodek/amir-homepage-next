import Image from 'next/image'
import React from 'react'
import handhsake from '@public/images/marketing/handshake.jpeg'
import Button from '../Button'
import type { FullWidthTeaser as FullWidthTeaserProps } from '@sanity/schemas/blocks/full-width-teaser'

export default function FullWidthTeaser({ title, description }: FullWidthTeaserProps) {
  return (
    <section className="relative w-full min-h-[24rem] py-14 px-4 flex flex-col justify-center my-20 my-md-40">
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
      <div className="relative z-20 amir-container mx-auto">
        <h3 className="text-h3 font-bold text-gray-100 mb-6">Lorem ipsum dolor sit amet.</h3>
        <p className="max-w-3xl text-lg text-gray-200 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores dignissimos harum
          iure mollitia doloremque cumque, autem corporis laudantium ipsum, cum fuga minima
          accusamus fugiat dolore provident? Doloribus, quae! Velit?
        </p>
        <Button theme="secondary" className="text-secondary-100" href="/kontakt">
          Skontaktuj się z nami
        </Button>
      </div>
    </section>
  )
}
