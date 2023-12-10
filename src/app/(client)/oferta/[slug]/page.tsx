import { type Metadata } from 'next'
import { getOffers, getOfferBySlug } from '@sanity/api/services'

import BlockMapper from 'components/blocks/Block'
import Teaser from 'components/shared/Teaser'
import { prepareImg } from 'lib/prepareImg'

interface OfferParams {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const offer = await getOfferBySlug(params.slug)
  const img = prepareImg(offer.mainImage, 'Zdjęcie oferty')

  return {
    title: offer.title,
    description: offer.metadescription,
    openGraph: {
      title: offer.title,
      description: offer.metadescription,
      url: `/blog/${offer.slug.current}`,
      images: [
        {
          url: img.source.src as string,
          width: img.dimensions?.width ?? 800,
          height: img.dimensions?.height ?? 600,
        },
      ],
    },
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
