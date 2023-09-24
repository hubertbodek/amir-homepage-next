import { blockTypes } from '../blocks'

const productsListPage = {
  name: 'ProductsListPage',
  title: 'Produkty',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: blockTypes,
    },
  ],
}

export default productsListPage
