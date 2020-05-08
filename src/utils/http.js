/**
 * get  post
 */

import qs from 'querystring'

let baseUrl = process.env.NODE_ENV === 'development' ? '/api' : 'http://iwenwiki.com/api/blueberrypai'

export function httpGet(url) {
  let urls = baseUrl + url
  // const result = fetch(urls)
  // return result
  return fetch(urls)
  .then(response => {
    return response.json()
  })
}

export function httpPost(url, params) {
  let urls = baseUrl + url
  return fetch(urls, {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json,text/plain,*/*"
    },
    body: qs.stringify(params)
  }).then(response => response.json())
}