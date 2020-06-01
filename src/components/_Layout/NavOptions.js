import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;

export class NavOptions extends Component {
    render() {
        return (
            <ul className="nav-options">
                <li><Link to="/">WHAT'S NEW</Link></li>
                <li><Link to="/shop">CLOTHING</Link></li>
                <li><Link to="/shop">ACCESSORIES</Link></li>
                <li><Link to="/shop">SHOES</Link></li>
                <li><Link to="/shop">DESIGNERS</Link></li>
                <li><Link to="/shop">VIP</Link></li>
                <li><Link to="/shop">STORES</Link></li>
                <li><Link to="/shop">BLOG</Link></li>
                <li><Link to="/shop">SALE</Link></li>
            </ul>
        )
    }
}

export default NavOptions
