import { groq } from 'next-sanity'

import { clientFetch } from '../client'
import { type OfferDocument } from '@sanity/schemas/documents/offer'

const getOfferBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "offer" && slug.current == "${slug}"]`
  const offers = await clientFetch<OfferDocument[]>({ query })

  return offers[0]
}

export default getOfferBySlug
