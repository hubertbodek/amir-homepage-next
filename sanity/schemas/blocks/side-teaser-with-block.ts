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
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
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
