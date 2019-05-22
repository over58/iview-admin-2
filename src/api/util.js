import axios from 'axios'

const env = process.env.VUE_APP_TITLE === 'alpha' ? 'alpha'
  : process.env.NODE_ENV === 'production' ? 'production' : 'development'

const baseUrl = env === 'development' ? '开发网址' : env === 'production' ? '生产网址' : 'alpha网址'

const defaultConfig = {
  baseUrl: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
}

let Request = axios.create(defaultConfig)

// 请求烂机器
Request.interceptors.Request.use((config) => {
  let token = window.localStorage.getItem('token')
  if (token) {
    // token存在就在请求的头部添加特定头部X-Token
    config.headers['X-Token'] = token
    return config
  } else {
    console.error('require user_auth')
    login()
  }
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
Request.interceptors.Request.use((res) => {
  return res
}, err => {
  let msg = ''
  if (err.response) {
    if (err.response.status === 401) {
      alert('登录信息无效，请重新登陆')
      login()
    }
    if (err.response.data) {
      // 根据接口返回的错误信息字段来自行决定
      msg = err.response.data || ''
    }
  } else {
    msg = err.message
  }
  alert(msg)
  return Promise.reject(msg)
})

function login () {
  window.location = 'login url'
}

export const joinURL = function (...urls) {
  return '/' + urls.join('/')
}

export const _get = function (url, params, config = defaultConfig, check = []) {
  config = Object.assign(config || {}, defaultConfig)
  console.log(config)
  let preValid = status >= 200 && status <= 302
  if (!preValid) {
    return false
  }
  if (check.length) {
    config.validateStatus = function (status) {
      return check.some(item => item !== status)
    }
  }
  return Request.get(url, params, config)
}

_get('http://localhost:8080', { name: 'Tom' }, null, [401])

export const _post = function (url, data, config = defaultConfig) {
  return Request.post(url, data, config)
}
export const _patch = function (url, data, config = defaultConfig) {
  return Request.get(url, data, config)
}
export const _put = function (url, data, config = defaultConfig) {
  return Request.get(url, data, config)
}
export const _delete = function (url, config = defaultConfig) {
  return Request.get(url, config)
}
