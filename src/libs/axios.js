/**
 * 使用 Axios 处理 GraphQL 和 RESTful 请求
 */
import axios from 'axios'
import apis from '../config/api'

const service = axios.create({
    baseURL: 'http://127.0.0.1:4000', // api 的 base_url
    timeout: 5000, // request timeout
    //withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'token': 'bear 123'
  }

})


service.interceptors.request.use(
  config => {

      return config
  },
  error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
  }
)

service.interceptors.response.use(
    response => {

        if (response.config.isGraphQL) { // GraphQL
          if(response.data.data[ Object.keys(response.data.data)[0]]) {
            return response.data.data
          } else {
            alert('token过期')

            Promise.reject(null)
          }

        } else { // RESTful
          const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data
          if (data.code == 200) {

            return  data.result.data
          } else {
            return   Promise.reject(response)
          }
        }

    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default (id, data) => {
  const option = apis.find(item => item.id === id)
  return service({ ...option, data })
}
