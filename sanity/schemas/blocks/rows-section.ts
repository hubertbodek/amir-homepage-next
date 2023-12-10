const rowsSection = {
  name: 'RowsSection',
  title: 'Rows Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'rows',
      title: 'Rzędy',
      type: 'array',
      of: [
        {
          name: 'Row',
          title: 'Rząd',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tytuł',
              type: 'string',
            },
            {
              name: 'items',
              title: 'Elementy',
              type: 'array',
              of: [
                {
                  name: 'rowItem',
                  title: 'Element',
                  type: 'object',
                  fields: [
                    {
                      name: 'image',
                      title: 'Zdjęcie',
                      type: 'ImageData',
                    },
                    {
                      name: 'subtitle',
                      title: 'Podtytuł',
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
