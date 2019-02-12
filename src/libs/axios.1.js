import axios from 'axios'
import apis from '../config/api'

const service = axios.create({
    baseURL: 'http://127.0.0.1:4000', // api 的 base_url
    timeout: 5000, // request timeout
    //withCredentials: true,
    headers: {
      'Content-Type': 'application/json',

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

      const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data
      if (data.code == 200) {
        return  data.result.data
      } else {
        return   Promise.reject(response)
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
