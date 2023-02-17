export interface Pagination {
  total: number
  page: number
  pageSize: number
  pageCount: number
}

export type Formats = Record<'thumbnail' | 'medium' | 'small' | 'large', Partial<Format>>

export interface Format {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: unknown
}

export interface StrapiImageModel {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  size: number
  url: string
}

export interface Article {
  image: StrapiImageModel
  main: string
  overview: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}
