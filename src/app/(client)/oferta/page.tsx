import { getOfferPage, getOffers } from '@sanity/api/services'

import Teaser from 'components/shared/Teaser'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import BlockMapper from 'components/blocks/Block'

import { prepareImg } from 'lib/prepareImg'
import data from './data.json'

const { main } = data

export default async function Offer() {
  const [{ title, description, blocks }, offers] = await Promise.all([getOfferPage(), getOffers()])

  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alt: 'Perforacja' }}
        title={title}
        label="Oferta"
      />
      <p className="mx-auto max-w-prose px-4 my-24 text-subtitle">{description}</p>
      <section className="amir-container mx-auto my-24 md:my-36">
        <h2 className="text-h2 mb-8 font-bold">{main.header}</h2>
        <p className="max-w-prose mb-6">{main.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {offers.map((item, idx) => (
            <VerticalOverlayCard
              key={`item--${idx}`}
              title={item.title}
              image={prepareImg(item.mainImage, '').source}
              url={`/oferta/${item.slug}`}
              overlay
            />
          ))}
        </div>
      </section>
      <BlockMapper blocks={blocks} />
    </>
  )
}
