import React, { Component, Fragment } from 'react';
import Logo from './Logo';

export class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="mailing-list">
                    <div className="container">
                        <div className="logo">
                            <Logo />
                        </div>
                        <form>
                            <input type="text" placeholder="Join our mailing list" />
                            <button type="submit">Join </button>
                        </form>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="address">
                            <h2>357 Pierpont Avenue<br/>
                                    Salt Lake City, UT 84101
                            </h2>
                        </div>
                        <div className="links">
                        <ul>
                            <li><a>About</a></li>
                            <li><a>Affiliate Program</a></li>
                            <li><a>Bluesign</a></li>
                            <li><a>Departures</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        <ul>
                            <li><a>Product Manuals</a></li>
                            <li><a>Reviews</a></li>
                            <li><a>FAQs</a></li>
                            <li><a>Returns & Exchanges</a></li>
                            <li><a>Terms & Conditions</a></li>
                        </ul>
                        <ul>
                            <li><a>Instagram</a></li>
                            <li><a>Youtube</a></li>
                            <li><a>Twitter</a></li>
                            <li><a>Facebook</a></li>
                        </ul>

                        </div>
                    </div>
                </footer>
                <div className="bottom container">
                    <p>© 2019 Boundary Supply | All rights reserved.</p>
                </div>
            </Fragment>
        )
    }
}

export default Footer
