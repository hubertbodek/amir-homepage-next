import { type StaticImageData } from 'next/image'

export interface ImageModel {
  src: string | StaticImageData
  alternativeText: string
}
