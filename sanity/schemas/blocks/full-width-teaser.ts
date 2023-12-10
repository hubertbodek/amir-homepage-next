const fullWidthTeaser = {
  title: 'Full Width Teaser',
  name: 'FullWidthTeaser',
  type: 'object',
  fields: [
    {
      title: 'Tytuł',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Opis',
      name: 'description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export interface FullWidthTeaser {
  title: string
  description: string
}

export default fullWidthTeaser
