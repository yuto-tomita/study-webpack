import React from 'react'
export default class Panel extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      input: '',
      list: [],
    }
  }

  render() {
    return <p className="text-5xl font-serif ml-20">かきくけこ</p>
  }
}
