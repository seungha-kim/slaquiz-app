import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

let client

// https://www.apollographql.com/docs/react/recipes/authentication.html#Header
export default function getClient() {
  if (client) return client
  const token = localStorage.getItem('token')
  if (!token) throw new Error('no token')

  const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      }
    }
  })

  client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
  return client
}
