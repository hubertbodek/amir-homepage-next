import { type StaticImageData } from 'next/image'

export interface StaticImageModel {
  src: string | StaticImageData
  alt: string
  quality?: number
}
