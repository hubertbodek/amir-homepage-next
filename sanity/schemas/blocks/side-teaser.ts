import { defineType } from 'sanity'

export default defineType({
  name: 'SideTeaser',
  title: 'Side Teaser',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Tekst',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [{ type: 'ImageData' }],
    },
    {
      name: 'reversed',
      title: 'Odwróć',
      description: 'Odwróć kolejność zdjęć i tekstu',
      type: 'boolean',
    },
    {
      name: 'test',
      title: 'Test Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
