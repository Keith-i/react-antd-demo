import React, { Component } from 'react'
import { Button, Pagination, Rate } from 'antd'

class OnePage extends Component {

  constructor() {
    super()
    this.state = {
      nums: 32
    }
  }

  pageChange(page, pageSize) {
    console.log(page, pageSize, this)
  }

  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <Rate></Rate>
        <Pagination defaultCurrent={1} total={500} onChange={ this.pageChange }></Pagination>
      </div>
    )
  }
}

export default OnePage