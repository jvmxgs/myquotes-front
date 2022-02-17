import Api from './api'

export default {
  quotes,
  dailyQuotes,
  userQuotes,
  downloadQuotes,
  addQuoteToUser,
  removeQuoteToUser
}

function dailyQuotes () {
  return new Promise((resolve, reject) => {
    Api.get('/quotes?scope=daily')
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function quotes (params) {
  return new Promise((resolve, reject) => {
    Api.get('/quotes?scope=allExceptToday', { params })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function userQuotes (params) {
  return new Promise((resolve, reject) => {
    Api.get('/quotes?scope=userQuotes', { params })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function downloadQuotes (params) {
  return new Promise((resolve, reject) => {
    Api.get(`/user/${params.user_id}/exportquotes`)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function addQuoteToUser (data) {
  return new Promise((resolve, reject) => {
    Api.post(`/user/${data.user_id}/quotes`, {
      quote_id: data.quote_id
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function removeQuoteToUser (data) {
  return new Promise((resolve, reject) => {
    Api.delete(`/user/${data.user_id}/quotes/${data.quote_id}`)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
