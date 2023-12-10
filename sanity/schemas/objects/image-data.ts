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
  title: 'Zdjęcie',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Tekst alternatywny',
      description: 'Wymagany przez SEO - opisuje obrazek dla osób niewidomych',
      type: 'string',
    },
    {
      name: 'quality',
      title: 'Jakość zdjęcia (0-100)',
      description:
        'Domyślnie 75, stosować rozważnie - zwiększa rozmiar zdjęcia co może wpłynąć na wydajność strony',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
      initialValue: 75,
    },
    {
      name: 'contain',
      title: 'Contain',
      description: 'Zdjęcie zostanie przeskalowane tak, aby całe było widoczne',
      type: 'boolean',
      initialValue: false,
    },
  ],
  options: {
    hotspot: true,
  },
})
