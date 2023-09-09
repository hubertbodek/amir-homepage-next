import { groq } from 'next-sanity'

import { clientFetch } from '../client'
import { type ServiceDocument } from '@sanity/schemas/documents/service'

const getServiceBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "service" && slug.current == "${slug}"]`
  const offers = await clientFetch(query)

  return offers[0] as ServiceDocument
}

export default getServiceBySlug
