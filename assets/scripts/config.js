'use strict'

let apiUrl
const apiUrls = {
  // production: '<replace-with-heroku-url>',
  production: 'https://thawing-headland-69785.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
