import { defineType } from 'sanity'

export default defineType({
  name: 'SideTeaserWithBlock',
  title: 'Side Teaser With Block',
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
      type: 'array',
      of: [{ type: 'block' }],
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
  ],
})
