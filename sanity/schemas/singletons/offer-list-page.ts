import { blockTypes } from '../blocks'

const offerListPage = {
  name: 'OfferListPage',
  title: 'Offer List Page',
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

export default offerListPage
