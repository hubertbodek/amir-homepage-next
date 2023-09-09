import type { Metadata } from 'next'

import Teaser from 'components/shared/Teaser'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

import { getServicePage, getServices } from '@sanity/api/services'
import BlockMapper from 'components/blocks/Block'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import { prepareImg } from 'lib/prepareImg'

export const metadata: Metadata = {
  title: 'Usługi',
}

export default async function Services() {
  const [{ title, description, blocks }, offers] = await Promise.all([
    getServicePage(),
    getServices(),
  ])

  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/spaw.jpeg', alt: 'Perforacja' }}
        title={title}
        label="Usługi"
      />
      <p className="mx-auto max-w-prose px-4 my-24 text-subtitle">{description}</p>
      <section className="amir-container mx-auto my-24 md:my-36">
        <h2 className="text-h2 mb-8 font-bold">Lorem ipsum dolor sit amet.</h2>
        <p className="max-w-prose mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus error, distinctio saepe
          veritatis modi nostrum!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {offers.map((item, idx) => (
            <VerticalOverlayCard
              key={`item--${idx}`}
              title={item.title}
              image={prepareImg(item.mainImage, '').source}
              url={`/uslugi/${item.slug}`}
              overlay
            />
          ))}
        </div>
      </section>
      <BlockMapper blocks={blocks} />
      <ContactFormWithMap />
    </>
  )
}
