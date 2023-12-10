const table = {
  name: 'TableContainer',
  title: 'Table',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Tytul',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
    },
    {
      name: 'table',
      title: 'Tabela',
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
