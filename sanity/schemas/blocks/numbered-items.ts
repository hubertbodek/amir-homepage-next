import { defineType } from 'sanity'

export default defineType({
  name: 'NumberedItems',
  title: 'Numbered Items',
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
      name: 'listItems',
      title: 'Lista',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
})
