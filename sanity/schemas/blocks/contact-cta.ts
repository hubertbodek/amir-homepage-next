import { defineType } from 'sanity'

export default defineType({
  name: 'ContactCta',
  title: 'Contact CTA',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'ImageData',
    },
  ],
})
