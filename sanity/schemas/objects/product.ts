import { defineType } from 'sanity'

export interface Product {
  title?: string
  description?: string
  allegroUrl?: string
}

export default defineType({
  name: 'Product',
  title: 'Produkt',
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
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'allegroUrl',
      title: 'Link do Allegro',
      description: 'Link do ogłoszenia produktu na Allegro',
      type: 'url',
    },
  ],
})
