import { groq } from 'next-sanity'
import { client } from '../client'

interface OffersResponse {
  slug: {
    current: string
  }
  mainImageUrl: string
}

const getOffers = async () => {
  const query = groq`*[_type == "offer"]{
    "slug": slug.current,
    "mainImage": mainImage
  }`
  const offers = await client.fetch(query)

  return offers as OffersResponse[]
}

export default getOffers
