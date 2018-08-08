// const fn = (x, y) => x * y;
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { fn2 } from './util'

class Demo extends Component {
  render () {
    fn2()
    return (
      <div className="box">{this.props.text}</div>
    );
  }
}

RectDom.render(
   <Demo text="This is a text" />,
   document.querySelector('.container')
)
