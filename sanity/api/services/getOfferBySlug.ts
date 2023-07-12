import { groq } from 'next-sanity'

import { client } from '../client'
import { type OfferDocument } from '@sanity/schemas/documents/offer'

const getOfferBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "offer" && slug.current == "${slug}"]`
  const offers = await client.fetch(query)

  return offers[0] as OfferDocument
}

export default getOfferBySlug
