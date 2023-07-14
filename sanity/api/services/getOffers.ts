import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type ImageData } from '@sanity/schemas/objects/image-data'

interface Offer {
  title: string
  slug: string
  mainImage: ImageData
}

const getOffers = async () => {
  const query = groq`*[_type == "offer"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage
  }`
  const offers = await clientFetch<Offer[]>(query)

  return offers
}

export default getOffers
