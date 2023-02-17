import { gql } from 'graphql-request'

import client from 'api/strapi'
import type { ArticleResponse } from 'api/blog/interfaces'

const getArticleBySlug = async (slug: string): Promise<ArticleResponse> => {
  const query = gql`
    query GetArticleBySlug($slug: String) {
      articles(filters: { slug: { eq: $slug } }) {
        meta {
          pagination {
            total
            page
            pageSize
            pageCount
          }
        }
        data {
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

  const response = await client.request(query, { slug })

  return response.articles.data[0]
}

export default getArticleBySlug
