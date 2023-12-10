import { defineType } from 'sanity'

export interface Prose {
  _type: 'Prose'
  heading?: string
  text: string
}

export default defineType({
  name: 'Prose',
  title: 'Prose',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Tekst',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
  ],
})
