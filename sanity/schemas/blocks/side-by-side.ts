import { defineField } from 'sanity'

const sideBySide = {
  name: 'SideBySide',
  title: 'Side By Side',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Elementy',
      type: 'array',
      of: [
        defineField({
          name: 'SideBySideItem',
          title: 'Side By Side Item',
          type: 'object',
          fields: [
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
              name: 'learnMoreUrl',
              title: 'Dowiedz się więcej URL',
              type: 'url',
            },
            {
              name: 'image',
              title: 'Zdjęcie',
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
