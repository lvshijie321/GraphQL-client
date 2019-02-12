import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import {ApolloLink} from 'apollo-link'

const apiLink = new HttpLink({
  uri: 'http://127.0.0.1:4000/GraphQL/api2'    //请求路径1
})
const apiLink2 = new HttpLink({
  uri: 'http://127.0.0.1:4000/GraphQL/api2'    //请求路径2
})


const middlewareLink = new ApolloLink((operation, forward) => {
  const token = 'abc'
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}` || null
    }
  })
  return forward(operation)
})

const apiClient = new ApolloClient({
  link: apiLink, // middlewareLink.concat(apiLink),  //如果不添加请求头直接放路径
  cache: new InMemoryCache()
})

const apiClient2 = new ApolloClient({
  link: apiLink2, // middlewareLink.concat(apiLink),  //如果不添加请求头直接放路径
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  clients: {
    api: apiClient,   //需要添加请求头
    api2: apiClient2,   //需要添加请求头
  },
  //defaultClient: apiClient  //默认请求路径，如果只有一个请求就使用这个就行
})

export default apolloProvider
