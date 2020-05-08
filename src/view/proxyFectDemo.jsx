import React, { Component } from 'react'

class proxyFectDemo extends Component {
  // http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0
  /**
   * 解决方案文档地址：
   * https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
   * 
   * 跨域的解决方案：
   *    开发模式下：
   *        利用环境解决：react vue常用框架，都提供了解决方案
   *    生产模式下：
   *        jsonp cors iframe postMessage...
   */

  componentDidMount() {
    fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
    .then(response => response.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(new Error(err))
    })

    /**
     * 访问本地服务器
     */
    // fetch("/api/list")
    // .then(response => response.json())
    // .then(res => {
    //   console.log(res)
    // })
  }

  render() {
    return (
      <div>proxyFectDemo</div>
    )
  }
}

export default proxyFectDemo