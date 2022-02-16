import axios from 'axios'
const baseURL = process.env.VUE_APP_ROOT_API + '/api'

var headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

const options = {
  headers,
  baseURL
}

const Axios = axios.create(options)

Axios.interceptors.request.use(
  function (config) {
    const lsUser = localStorage.getItem('user')
    const user = JSON.parse(lsUser)
    if (user) {
      config.headers.Authorization = 'Bearer ' + user.token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.response) {
      if (error.response.data.message === 'Unauthenticated.') {
        localStorage.removeItem('user')
        return null
      }
    }
    return Promise.reject(error)
  }
)

export default Axios
