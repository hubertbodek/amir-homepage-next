import { groq } from 'next-sanity'

import { clientFetch, draftClientFetch } from '../client'
import { type ProductDocument } from '@sanity/schemas/documents/product'
import { TAGS } from 'constants/revalidate-tags'

const getProductBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "product" && slug.current == "${slug}"]{
    ...,
    category->{
      title
    }
  }`

  const products = await clientFetch<ProductDocument[]>({ query, tags: [TAGS.PRODUCT] })

  return products[0]
}

export const getProductPreview = async (id: string) => {
  const query = groq`
  *[_type == "product" && _id == "drafts.${id}"]{
    ...,
    category->{
      title
    }
  }`

  const products = await draftClientFetch<ProductDocument[]>({ query })

  return products[0]
}

export default getProductBySlug
