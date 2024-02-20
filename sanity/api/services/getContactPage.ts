import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type ContactPageType } from '@sanity/schemas/singletons/contact-page'

const getContactPage = async () => {
  const query = groq`*[_id == "ContactPage"][0]
`
  const page = await clientFetch<ContactPageType>({ query })

  return page
}

export default getContactPage
