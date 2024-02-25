import { defineType } from 'sanity'
import { type ImageData } from '../objects/image-data'
import { type BlockModel } from 'components/blocks/Block'
import { type SanityDocument } from '../base'
import { blockTypes } from '../blocks'

export interface OfferDocument extends Partial<SanityDocument> {
  title: string
  metadescription: string
  slug: {
    current: string
  }
  mainImage: ImageData
  blocks: BlockModel[]
}

export default defineType({
  name: 'offer',
  title: 'Oferty',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'metadescription',
      title: 'Opis',
      description: 'Opis wyświetlany w wyszukiwarce Google (nie przekraczać  160 znaków)',
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
      title: 'Główne zdjęcie',
      type: 'ImageData',
    },
    {
      name: 'blocks',
      title: 'Bloki',
      type: 'array',
      of: blockTypes,
    },
  ],
})
