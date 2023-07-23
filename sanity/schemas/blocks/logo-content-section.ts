import { defineType } from 'sanity'
import type { ImageData } from '../objects/image-data'

export default defineType({
  name: 'LogoContentSection',
  title: 'Logo Content Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'ImageData',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [
        {
          name: 'paragraph',
          title: 'Paragraph',
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'body',
              title: 'Body',
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
