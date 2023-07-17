import { createClient } from 'next-sanity'
import { cache } from 'react'

const isProd = process.env.NODE_ENV === 'production'

export const client = createClient({
  projectId: '940pe5u1',
  dataset: 'production',
  apiVersion: '2023-07-10',
  useCdn: isProd,
})

export const clientFetch = cache(client.fetch.bind(client))
