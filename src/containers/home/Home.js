import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Base extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)

    document.title = 'This is afrikan'
    $('head').append(
      `<link rel="icon" href="images/icon.png" type="image/icon type">`
    )
  }

  render () {
    return <div></div>
  }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Base)
