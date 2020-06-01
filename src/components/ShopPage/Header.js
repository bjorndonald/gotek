import React, { Component } from 'react'

export class Header extends Component {
    render() {
        const style={
            //background: `url(${require('./../../img/men_banner.jpg')})`
        }
        return (
            <header style={style}>
                <h1>All Men's Clothing</h1>
                <small>Discover Anna's picks of fashion's finest trends in our clothing edit</small>
            </header>
        )
    }
}

export default Header
