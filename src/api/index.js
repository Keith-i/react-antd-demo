import base from './base'
import { httpGet, httpPost } from '../utils/http'

const api = {
  getBenners() {
    return httpGet(base.banners)
  },
  getLogin(params) {
    return httpPost(base.login, params)
  }
}

export default api