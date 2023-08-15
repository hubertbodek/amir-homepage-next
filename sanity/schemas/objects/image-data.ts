import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { defineType } from 'sanity'

export interface ImageData extends SanityImageObject {
  _type: 'ImageData'
  alt?: string
  quality?: number
  contain?: boolean
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
    {
      name: 'quality',
      title: 'Quality (0-100)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
      initialValue: 75,
    },
    {
      name: 'contain',
      title: 'Contain',
      type: 'boolean',
      initialValue: false,
    },
  ],
  options: {
    hotspot: true,
  },
})
