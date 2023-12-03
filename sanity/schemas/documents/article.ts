import { defineType } from 'sanity'

import { type ImageData } from '../objects/image-data'
import type { PortableTextBlock } from '@portabletext/types'

export interface ArticleDocument {
  title: string
  slug: {
    current: string
  }
  description: string
  mainImage: ImageData
  text: PortableTextBlock[]
}

export default defineType({
  name: 'article',
  title: 'Artykuły',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis',
      description: 'Opis wyświetlany w wyszukiwarce i na social media',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'ImageData',
    },
    {
      name: 'text',
      title: 'Tekst',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
