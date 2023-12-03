import { groq } from 'next-sanity'

import { clientFetch } from '../client'
import { type ProductDocument } from '@sanity/schemas/documents/product'

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

export default getProductBySlug
