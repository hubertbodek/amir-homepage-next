import { defineField } from 'sanity'

const sideBySide = {
  name: 'SideBySide',
  title: 'Side By Side',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'SideBySideItem',
          title: 'Side By Side Item',
          type: 'object',
          fields: [
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
              name: 'learnMoreUrl',
              title: 'Learn More URL',
              type: 'url',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'ImageData',
            },
          ],
        }),
      ],
    },
    {
      name: 'alignLeft',
      title: 'Align Left',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'light',
      title: 'Theme Light (true) or Dark (false)',
      type: 'boolean',
      initialValue: false,
    },
  ],
}

export default sideBySide
