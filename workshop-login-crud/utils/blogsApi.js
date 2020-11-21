import { request } from './api'

const HOSTNAME = 'https://sakko-demo-api.herokuapp.com'

export function index() {
  const url = `${HOSTNAME}/api/v1/user/blogs`
  return request('get', url, {}, true)
}

export function show(id) {
  const url = `${HOSTNAME}/api/v1/user/blogs/${id}`
  return request('get', url, {}, true)
}
