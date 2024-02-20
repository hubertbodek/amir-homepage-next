import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type ArticleDocument } from '@sanity/schemas/documents/article'

const getArticles = async () => {
  const query = groq`*[_type == "article"]`
  const offers = await clientFetch<ArticleDocument[]>({ query })

  return offers
}

export default getArticles
