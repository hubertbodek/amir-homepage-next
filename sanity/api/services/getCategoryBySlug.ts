import { groq } from 'next-sanity'

import { clientFetch } from '../client'
import { type CategoryDocument } from '@sanity/schemas/documents/category'

const getCategoryBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "category" && slug.current == "${slug}"]`
  const offers = await clientFetch(query)

  return offers[0] as CategoryDocument
}

export default getCategoryBySlug
