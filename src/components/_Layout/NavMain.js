import React, { Component, Fragment } from 'react';
import Logo from './Logo';
import AccountLogo from './../_util/AccountLogo';
import CartLogo from './../_util/CartLogo';
import SearchLogo from './../_util/SearchLogo';
import NavOptions from './NavOptions';
import Top from './Top';

export class NavMain extends Component {
    render() {
        return (
            <Fragment>
                <Top />
                <nav>
                    <div className='container'>
                        <div className="bars">
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <form>
                            <SearchLogo />
                            <input type="text" placeholder="Search text here"/>
                        </form>
                        <div className="logo">
                            <Logo />
                        </div>
                        <ul className="right">
                            <li>Account <AccountLogo /></li>
                            <li>Your Bag<CartLogo />
                                <div className="tag">1</div>
                            </li>
                        </ul>
                        <div className="bag">
                            <CartLogo />
                            <div className="tag">1</div>
                        </div>
                    </div>
                </nav>
                <NavOptions />
            </Fragment>
        )
    }
}

export default NavMain
