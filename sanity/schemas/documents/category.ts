import { defineType } from 'sanity'
import { type ImageData } from '../objects/image-data'
import { type ProductDocument } from '../documents/product'

export interface CategoryDocument {
  title: string
  metadescription: string
  slug: {
    current: string
  }
  mainImage: ImageData
  products: ProductDocument[]
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
      name: 'metadescription',
      title: 'Opis',
      description: 'Opis wyświetlany w wyszukiwarce Google (nie przekraczać ok. 160 znaków)',
      validation: (Rule) => Rule.max(160),
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
  ],
})
