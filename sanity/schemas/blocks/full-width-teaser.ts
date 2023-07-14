const fullWidthTeaser = {
  title: 'Full Width Teaser',
  name: 'FullWidthTeaser',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Description',
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
