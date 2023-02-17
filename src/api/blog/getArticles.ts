import { gql } from 'graphql-request'

import client from 'api/strapi'
import type { ArticlesResponse } from './interfaces'

type GetArticlesArgs = {
  page?: number
  pageSize?: number
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
} | void

const getArticles = async (pagination: GetArticlesArgs): Promise<ArticlesResponse> => {
  const query = gql`
    query GetArticles($page: Int = 1, $pageSize: Int = 11) {
      articles(pagination: { page: $page, pageSize: $pageSize }) {
        meta {
          pagination {
            total
            page
            pageSize
            pageCount
          }
        }
        data {
          id
          attributes {
            image {
              data {
                attributes {
                  name
                  alternativeText
                  width
                  height
                  formats
                  size
                  url
                }
              }
            }
            title
            overview
            description
            main
            slug
          }
        }
      }
    }
  `

  const response = await client.request(query, pagination ?? undefined)

  return response
}

export default getArticles
