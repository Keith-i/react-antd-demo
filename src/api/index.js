import base from './base'
import { httpGet, httpPost } from '../utils/http'

const api = {
  getBenners() {
    return httpGet(base.banners)
  },
  getLogin() {
    return httpPost(base.login, {
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw"
    })
  }
}

export default api