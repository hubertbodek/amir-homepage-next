import { defineType } from 'sanity'
import type { PortableTextBlock } from '@portabletext/types'

import { type ImageData } from '../objects/image-data'
import { type SanityDocument } from '../base'

export interface ProductDocument extends SanityDocument {
  title: string
  slug: {
    current: string
  }
  images: ImageData[]
  description?: PortableTextBlock[]
  allegroUrl?: string
}

export default defineType({
  name: 'product',
  title: 'Produkty',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Kategoria',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'ImageData' }],
      validation: (Rule) => Rule.min(1).max(10),
    },
    {
      name: 'allegroUrl',
      title: 'Link do Allegro',
      description: 'Link do ogłoszenia produktu na Allegro',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
