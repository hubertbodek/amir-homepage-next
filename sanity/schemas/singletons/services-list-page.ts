import { blockTypes } from '../blocks'

const servicesListPage = {
  name: 'ServicesListPage',
  title: 'Usługi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł strony',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis strony',
      type: 'text',
    },
    {
      name: 'blocks',
      title: 'Bloki',
      type: 'array',
      of: blockTypes,
    },
  ],
}

export default servicesListPage
