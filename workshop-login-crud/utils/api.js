import axios from 'axios'

const getToken = function () {
  if (process.server) return
  if (window.$nuxt) {
    return window.$nuxt.$auth.getToken('local')
  }
}

export async function request(method, url, data, auth = false) {
  const headers = {}
  if (auth) {
    headers['auth-token'] = getToken()
  }

  try {
    const res = await axios({
      method,
      url,
      data,
      headers,
    })
    return res
  } catch (e) {
    return e
  }
}
