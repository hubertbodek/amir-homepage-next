import { defineType } from 'sanity'
import { type ImageData } from '../objects/image-data'
import { type BlockModel } from 'components/blocks/Block'

export interface OfferDocument {
  title: string
  slug: {
    current: string
  }
  mainImage: ImageData
  blocks: BlockModel[]
}

export default defineType({
  name: 'offer',
  title: 'Offer',
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
      of: [{ type: 'SideTeaser' }, { type: 'Prose' }],
    },
  ],
})
