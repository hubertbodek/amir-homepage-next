import { groq } from 'next-sanity'
import { clientFetch, draftClientFetch } from '../client'
import { type ContactPageType } from '@sanity/schemas/singletons/contact-page'

const getContactPage = async (preview?: boolean) => {
  const query = groq`*[_id == "${preview ? 'drafts.' : ''}ContactPage"][0]
`
  const page = preview
    ? await draftClientFetch<ContactPageType>({ query })
    : await clientFetch<ContactPageType>({ query })

  return page
}

export default getContactPage
