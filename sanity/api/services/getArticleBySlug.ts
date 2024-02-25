import { groq } from 'next-sanity'

import { clientFetch, draftClientFetch } from '../client'
import { type ArticleDocument } from '@sanity/schemas/documents/article'

const getArticleBySlug = async (slug: string) => {
  const query = groq`
  *[_type == "article" && slug.current == "${slug}"]`
  const offers = await clientFetch<ArticleDocument[]>({ query })

  return offers[0]
}

export const getArticleBySlugPreview = async (id: string) => {
  const query = groq`
  *[_type == "article" && _id == "drafts.${id}"]`
  const offers = await draftClientFetch<ArticleDocument[]>({ query })

  return offers[0]
}

export default getArticleBySlug
