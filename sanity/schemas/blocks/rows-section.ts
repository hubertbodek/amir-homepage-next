const rowsSection = {
  name: 'RowsSection',
  title: 'Rows Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          name: 'Row',
          title: 'Row',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  name: 'rowItem',
                  title: 'Row Item',
                  type: 'object',
                  fields: [
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'ImageData',
                    },
                    {
                      name: 'subtitle',
                      title: 'Subtitle',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default rowsSection
