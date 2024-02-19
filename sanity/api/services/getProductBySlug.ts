import { groq } from 'next-sanity'

import { clientFetch, draftClientFetch, getClient } from '../client'
import { type ProductDocument } from '@sanity/schemas/documents/product'

interface FetchOptions {
  preview?: boolean
}

const getProductBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "product" && slug.current == "${slug}"]{
    ...,
    category->{
      title
    }
  }`

  const products = await clientFetch(query)

  return products[0] as ProductDocument
}

export const getProductPreview = async (id: string) => {
  const query = groq`
  *[_type == "product" && _id == "drafts.${id}"]{
    ...,
    category->{
      title
    }
  }`

  const products = await draftClientFetch(query)

  return products[0] as ProductDocument
}

export default getProductBySlug
