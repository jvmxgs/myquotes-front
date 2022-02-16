import Api from './api'

export default {
  login,
  logout,
  register
}

function login (credentials) {
  return new Promise((resolve, reject) => {
    Api.post('/login', credentials)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', JSON.stringify(response.data.token))
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function logout () {
  localStorage.removeItem('user')
}

function register (user) {
  return new Promise((resolve, reject) => {
    Api.post('/register', user)
      .then(user => {
        resolve(user)
      })
      .catch(error => {
        reject(error)
      })
  })
}
