import { groq } from 'next-sanity'

import { clientFetch } from '../client'
import { type CategoryDocument } from '@sanity/schemas/documents/category'

const getCategoryBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "category" && slug.current == "${slug}"]{
    ...,
    "products": *[_type=='product' && references(^._id)]
  }`
  const offers = await clientFetch<CategoryDocument[]>({ query })

  return offers[0]
}

export default getCategoryBySlug
