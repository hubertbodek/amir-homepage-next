import { groq } from 'next-sanity'

import { clientFetch, draftClientFetch } from '../client'
import { type ServiceDocument } from '@sanity/schemas/documents/service'

const getServiceBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "service" && slug.current == "${slug}"]`
  const offers = await clientFetch<ServiceDocument[]>({ query })

  return offers[0]
}

export const getServiceBySlugPreview = async (id: string) => {
  const query = groq`
  *[_type == "service" && _id == "drafts.${id}"]`
  const offers = await draftClientFetch<ServiceDocument[]>({ query })

  return offers[0]
}

export default getServiceBySlug
