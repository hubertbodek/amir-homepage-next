import siatkaCcTeaserImg from '@public/images/marketing/metal-pattern.jpeg'

// import BlockMapper, { type BlockProps } from 'components/blocks/Block'
import Teaser from 'components/shared/Teaser'
import { getOffers } from '@sanity/schemas/api/services'

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
  const offer = await getOffers()

  console.log(offer)

  return (
    <>
      {offer && (
        <Teaser
          image={{ src: siatkaCcTeaserImg, alternativeText: 'Teaser' }}
          title="Oferta"
          label="Oferta"
        />
      )}

      {/* <BlockMapper blocks={data.content as BlockProps[]} /> */}
    </>
  )
}

export async function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }))
}
