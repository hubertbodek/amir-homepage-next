import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { ProductDocument } from '@sanity/schemas/documents/product'
import { TAGS } from 'constants/revalidate-tags'

interface ProductSlugs {
  slug: string
}

const getProducts = async () => {
  const query = groq`*[_type == "product"]{
    "slug": slug.current,
  }`
  const products = await clientFetch<ProductSlugs[]>({ query, tags: [TAGS.PRODUCT] })

  return products
}

export const getProductsList = async () => {
  const query = groq`*[_type == "product"]{
    ...,
    category->{
      title
    }
  }`
  const products = await clientFetch<ProductDocument[]>({ query, tags: [TAGS.PRODUCT] })

  return products
}

export default getProducts
