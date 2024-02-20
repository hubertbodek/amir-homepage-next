import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type ImageData } from '@sanity/schemas/objects/image-data'

export interface Category {
  title: string
  slug: string
  mainImage: ImageData
}

const getCategories = async () => {
  const query = groq`*[_type == "category"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage
  }`
  const offers = await clientFetch<Category[]>({ query })

  return offers
}

export default getCategories
