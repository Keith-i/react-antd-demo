import React, { Component } from 'react'
import api from '../api'

class fectEncapsulation extends Component {

  constructor() {
    super()
    this.state = {
      bannersData: [],
      loginData: false
    }
  }

  async componentDidMount() {
    let data = await api.getBenners()
    console.log(data, 'data')

    let loginData = await api.getLogin()
    console.log(loginData, 'loginData')

    this.setState({
      bannersData: data.banner,
      loginData: loginData.success
    })
  }

  render() {
    return (
      <div>fetch封装测试:
        <div>数据：
          <div>
            <p>banner列表：</p>
            {
              this.state.bannersData.map(item => {
              return <p key={item.title}>{item.content}</p>
              })
            }
          </div>
          <div>
            <p>登录是否成功</p>
            {
              this.state.loginData ?
                <span>成功登录</span>
              : <span>没有登录</span>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default fectEncapsulation
