// import siatkaCcTeaserImg from '@public/images/marketing/metal-pattern.jpeg'
import { getOffers, getOfferBySlug } from '@sanity/api/services'

import BlockMapper from 'components/blocks/Block'
import Teaser from 'components/shared/Teaser'

interface OfferParams {
  params: {
    slug: string
  }
}

export default async function Offer({ params }: OfferParams) {
  const { slug } = params

  const offer = await getOfferBySlug(slug)

  return (
    <>
      <Teaser image={offer.mainImage} title={offer.title} label="Oferta" />
      <BlockMapper blocks={offer.blocks} />
    </>
  )
}

export async function generateStaticParams() {
  const offers = await getOffers()

  return offers.map((offer) => ({ slug: offer.slug }))
}
