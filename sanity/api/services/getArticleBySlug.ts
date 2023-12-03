import { groq } from 'next-sanity'

import { clientFetch } from '../client'
import { type ArticleDocument } from '@sanity/schemas/documents/article'

const getArticleBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "article" && slug.current == "${slug}"]`
  const offers = await clientFetch(query)

  return offers[0] as ArticleDocument
}

export default getArticleBySlug
