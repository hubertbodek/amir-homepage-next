import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { defineType } from 'sanity'

export interface ImageData extends SanityImageObject {
  _type: 'ImageData'
  alt?: string
}

export default defineType({
  name: 'ImageData',
  title: 'Image data',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
    },
  ],
  options: {
    hotspot: true,
  },
})
