import React, { Component } from 'react'
import slide1 from './../../img/slide1.jpg'
import $ from 'jquery'

export class Slide extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='slide active' id='0'>
        <div className='img-banner'>
          <div className='dark-overlay'></div>
          <img src={slide1} className='banner' />
        </div>
      </div>
    )
  }
}

export default Slide
