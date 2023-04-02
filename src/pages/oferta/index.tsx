import type { InferGetStaticPropsType } from 'next'
import React from 'react'

import SideTeaser from 'components/shared/sections/SideTeaser'
import Teaser from 'components/shared/Teaser'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import data from 'data/offer.json'

export default function Offer({
  pageData: { copyText, sideTeaser, items },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Wybierz to, czego potrzebujesz"
        label="Oferta"
      />
      <p className="mx-auto max-w-prose px-4 py-24 text-subtitle">{copyText}</p>
      <SideTeaser {...sideTeaser} reversed />
      <section className="amir-container mx-auto my-24 md:my-36">
        <h2 className="text-h2 mb-8 font-bold">Lorem ipsum dolor sit amet.</h2>
        <p className="max-w-prose mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque debitis suscipit
          totam id pariatur vero sapiente in praesentium voluptatibus labore!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {items.map((item, idx) => (
            <VerticalOverlayCard key={`item--${idx}`} {...item} overlay />
          ))}
        </div>
      </section>
      <SideTeaser {...sideTeaser} />
      <ContactFormWithMap />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: { pageData: data },
  }
}
