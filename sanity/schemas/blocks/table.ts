const table = {
  name: 'TableContainer',
  title: 'Table',
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
      name: 'table',
      title: 'Table',
      type: 'table',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

interface Row {
  cells: string[]
}

export interface Table {
  title?: string
  description?: string
  table: {
    rows: Row[]
  }
}

export default table
