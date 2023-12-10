import { defineType } from 'sanity'

export default defineType({
  name: 'ContactCta',
  title: 'Contact CTA',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'ImageData',
    },
  ],
})
