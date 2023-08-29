import { blockTypes } from '../blocks'

const aboutUsPage = {
  name: 'AboutUsPage',
  title: 'O nas',
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

export default aboutUsPage
