import { QueryParams, createClient } from 'next-sanity'

export const client = createClient({
  projectId: '940pe5u1',
  dataset: 'production',
  apiVersion: '2023-07-10',
  useCdn: false,
})

export const draftClient = createClient({
  projectId: '940pe5u1',
  dataset: 'production',
  apiVersion: '2023-07-10',
  useCdn: false,
  token: process.env.SANITY_PREVIEW_TOKEN,
  perspective: 'raw',
})

export async function clientFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      tags,
    },
  })
}

export async function draftClientFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  return draftClient.fetch<QueryResponse>(query, params, {
    next: {
      tags,
    },
  })
}
