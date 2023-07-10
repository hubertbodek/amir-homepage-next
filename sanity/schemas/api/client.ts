import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '940pe5u1',
  dataset: 'production',
  apiVersion: '2023-07-10',
  useCdn: true,
})
