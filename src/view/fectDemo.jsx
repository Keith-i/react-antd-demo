import React, { Component } from 'react'
import qs from 'querystring'

class fectDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      banners: []
    }
  }

  componentDidMount() {
    /**
     * get请求
     */
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    .then(response  => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      this.setState({
        banners: data.banner
      })
    })

    /**
     * post请求
     */
    fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json,text/plain,*/*"
      },
      body: qs.stringify({
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw"
      })
    })
    .then(response => response.json())
    .then(res => {
      console.log(res)
    })
  }

  render() {
    const { banners } = this.state
    return (
      <div>
        {
          banners.length > 0 ?
          <ul>
            {
              banners.map((item, index) => {
                return <li key={item.title}>{ item.title }</li>
              })
            }
          </ul> :
          <div>等待数据加载...</div>
        }
      </div>
    )
  }
}

export default fectDemo
