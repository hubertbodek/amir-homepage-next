import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type ImageData } from '@sanity/schemas/objects/image-data'

interface Service {
  title: string
  slug: string
  mainImage: ImageData
}

const getServices = async () => {
  const query = groq`*[_type == "service"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage
  }`
  const offers = await clientFetch<Service[]>({ query })

  return offers
}

export default getServices
