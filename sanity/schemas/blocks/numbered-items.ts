import { defineType } from 'sanity'

export default defineType({
  name: 'NumberedItems',
  title: 'Numbered Items',
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
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
})
