import { defineType } from 'sanity'
import { type ImageData } from '../objects/image-data'

export interface CategoryDocument {
  title: string
  slug: {
    current: string
  }
  mainImage: ImageData
}

export default defineType({
  name: 'category',
  title: 'Katalog produktów',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'products',
      title: 'Produkty',
      type: 'array',
      of: [{ type: 'Product' }],
    },
  ],
})
