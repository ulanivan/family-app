
import app from '../main'

const ApiService = {
  // init() {
  //   app.use(VueAxios, axios)
  //   app.axios.defaults.baseURL = baseURL
  // app.axios.defaults.withCredentials = true
  // app.axios.interceptors.response.use(undefined, function (error) {
  //   if (error) {
  //     const originalRequest = error.config
  //     if (error.response.status === 403 && !originalRequest._retry) {
  //       originalRequest._retry = true
  //     }
  //   }
  // })
  // },
  query(resource, params) {
    return app.axios.get(resource, params)
  },
  get(resource, id = '') {
    return app.axios.get(`${resource}/${id}`)
  },
  getFile(url) {
    return app.axios.get(url)
  },
  post(resource, data, config) {
    return app.axios.post(`${resource}`, data, config)
  },
  update(resource, id, data, config) {
    return app.axios.put(`${resource}/${id}/`, data, config)
  },
  put(resource, data, config) {
    return app.axios.put(`${resource}`, data, config)
  },
  patch(resource, data, config) {
    return app.axios.patch(`${resource}`, data, config)
  },
  delete(resource, id, config) {
    return app.axios.delete(`${resource}/${id}`, config)
  }
}

export default ApiService
