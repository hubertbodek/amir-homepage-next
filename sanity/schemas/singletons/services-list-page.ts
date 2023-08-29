import { blockTypes } from '../blocks'

const servicesListPage = {
  name: 'ServicesListPage',
  title: 'Usługi',
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

export default servicesListPage
