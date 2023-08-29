import { defineType } from 'sanity'
import { type ImageData } from '../objects/image-data'
import { type BlockModel } from 'components/blocks/Block'
import { blockTypes } from '../blocks'

export interface OfferDocument {
  title: string
  slug: {
    current: string
  }
  mainImage: ImageData
  blocks: BlockModel[]
}

export default defineType({
  name: 'service',
  title: 'Usługi',
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
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: blockTypes,
    },
  ],
})
