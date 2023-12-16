import type { Metadata } from 'next'

import { getGenericPage, getOffers } from '@sanity/api/services'
import Teaser from 'components/shared/Teaser'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import BlockMapper from 'components/blocks/Block'
import Grid from 'components/shared/Grid'

import { prepareImg } from 'lib/prepareImg'
import data from './data.json'

const { main } = data

export const metadata: Metadata = {
  title: 'Oferta',
  description:
    'Zapoznaj się z kompleksową ofertą metalowych wyrobów i usług świadczonych przez Amir Metal. Oferujemy wysokiej jakości blachy perforowane, różnego rodzaju siatki, sprężyny i dennice. Odkryj precyzję i innowacyjność w każdym detalu - znajdź idealne rozwiązania dla swoich potrzeb metalowych.',
}

export default async function Offer() {
  const [{ title, description, blocks }, offers] = await Promise.all([
    getGenericPage('OfferListPage'),
    getOffers(),
  ])

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
        <Grid>
          {offers.map((item, idx) => (
            <VerticalOverlayCard
              className="max-lg:!aspect-square max-lg:!h-auto"
              key={`item--${idx}`}
              title={item.title}
              image={prepareImg(item.mainImage, '').source}
              url={`/oferta/${item.slug}`}
              overlay
            />
          ))}
        </Grid>
      </section>
      <BlockMapper blocks={blocks} />
    </>
  )
}
