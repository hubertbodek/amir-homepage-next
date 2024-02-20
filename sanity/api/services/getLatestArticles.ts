import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type ArticleDocument } from '@sanity/schemas/documents/article'

type Article = Omit<ArticleDocument, 'text'>

const getLatestArticles = async (amount = 3) => {
  const query = groq`*[_type == "article"]{
    title,
    metadescription,
    slug,
    mainImage
  }[0...${amount}]`

  const articles = await clientFetch<Article[]>({ query })

  return articles
}

export default getLatestArticles
