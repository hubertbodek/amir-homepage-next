import type { Pagination, StrapiImageModel } from 'app/types/strapi'

export interface ArticleSchema {
  image: {
    data: {
      attributes: Omit<StrapiImageModel, 'caption'>
    }
  }
  title: string
  overview: string
  description: string
  main: string
  slug: string
}

export interface ArticleResponse {
  id: string
  attributes: ArticleSchema
}

export interface ArticlesResponse {
  articles: {
    meta: {
      pagination: Pagination
    }
    data: ArticleResponse[]
  }
}
