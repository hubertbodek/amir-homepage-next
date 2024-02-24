import { type SanityDocument } from 'next-sanity'

export interface Doc extends SanityDocument {
  slug: {
    current: string
  }
}
