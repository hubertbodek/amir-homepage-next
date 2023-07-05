import siatkaCcTeaserImg from '@public/images/marketing/metal-pattern.jpeg'

import { getFileContent } from 'lib/static-data'
import BlockMapper, { type BlockProps } from 'components/blocks/Block'
import Teaser from 'components/shared/Teaser'

const offers = [
  { slug: 'siatka-cieto-ciagniona', title: 'Siatka cięto-ciągniona', teaserImg: siatkaCcTeaserImg },
  { slug: 'dennice', title: 'Dennice', teaserImg: siatkaCcTeaserImg },
  { slug: 'blacha-perforowana', title: 'Blacha perforowana', teaserImg: siatkaCcTeaserImg },
  { slug: 'siatka-pleciona', title: 'Siatka pleciona', teaserImg: siatkaCcTeaserImg },
  { slug: 'tkaniny-metalowe', title: 'Tkaniny metalowe', teaserImg: siatkaCcTeaserImg },
  { slug: 'siatka-zgrzewana', title: 'Siatka zgrzewana', teaserImg: siatkaCcTeaserImg },
  { slug: 'sprezyny', title: 'Sprężyny', teaserImg: siatkaCcTeaserImg },
]

interface OfferParams {
  params: {
    slug: string
  }
}

export default async function Offer({ params }: OfferParams) {
  const data = await getFileContent({
    dir: 'app/oferta/[slug]/data',
    filename: params.slug,
  })

  const getOffer = (name: string) => {
    const offer = offers.find((offer) => offer.slug === name)

    return offer
  }

  const offer = getOffer(params.slug)

  return (
    <>
      {offer && (
        <Teaser
          image={{ src: offer.teaserImg, alternativeText: offer.title }}
          title={offer.title}
          label="Oferta"
        />
      )}

      <BlockMapper blocks={data.content as BlockProps[]} />
    </>
  )
}

export async function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }))
}
