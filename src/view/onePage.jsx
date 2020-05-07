import React, { Component } from 'react'
import { Button, Pagination, Rate } from 'antd'

class OnePage extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <Rate></Rate>
        <Pagination defaultCurrent={1} total={50}></Pagination>
      </div>
    )
  }
}

export default OnePage