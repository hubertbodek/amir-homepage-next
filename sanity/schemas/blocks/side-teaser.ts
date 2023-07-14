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
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'ImageData' }],
    },
    {
      name: 'reversed',
      title: 'Reversed',
      type: 'boolean',
    },
  ],
})
