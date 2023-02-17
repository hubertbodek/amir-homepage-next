import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_STRAPI_API_URL!
const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN!

const client = new GraphQLClient(`${endpoint}/graphql`, {
  headers: {
    authorization: 'Bearer ' + token,
  },
})

export default client
