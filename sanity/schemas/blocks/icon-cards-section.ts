import { defineType, defineField } from 'sanity'
import { iconsList } from 'components/shared/icon'

export default defineType({
  name: 'IconCardsSection',
  title: 'Icon Cards Section',
  type: 'object',
  fields: [
    {
      name: 'cards',
      title: 'Karty',
      type: 'array',
      of: [
        defineField({
          name: 'IconCard',
          title: 'Icon Card',
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
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: iconsList,
              },
            },
          ],
        }),
      ],
    },
  ],
})
