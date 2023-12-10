import { defineType } from 'sanity'
import type { ImageData } from '../objects/image-data'

export default defineType({
  name: 'LogoContentSection',
  title: 'Logo Content Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'ImageData',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'paragraphs',
      title: 'Paragrafy',
      type: 'array',
      of: [
        {
          name: 'paragraph',
          title: 'Paragraf',
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Tytuł',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'body',
              title: 'Treść',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
})

export interface LogoContentSectionProps {
  heading?: string
  image: ImageData
  paragraphs?: Array<{
    heading: string
    body: string
  }>
}
