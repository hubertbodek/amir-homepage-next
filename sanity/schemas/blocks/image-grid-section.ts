import type { ImageData } from '../objects/image-data'

const imageGridSection = {
  name: 'ImageGridSection',
  title: 'Image Grid Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis  ',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [{ type: 'ImageData' }],
    },
  ],
}

export interface ImageGridSection {
  title: string
  description: string
  images: ImageData[]
}

export default imageGridSection
