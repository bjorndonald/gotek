import React, { Component } from 'react'

export class Content extends Component {
    constructor(props) {
        super(props);
        this.leftImg = require('./../../img/left-banner.jpg');
        this.middleImg = require('./../../img/middle-banner.jpg');
        this.rightImg = require('./../../img/right-banner.jpg');
    }



    render() {
        return (
            <div className="content">
                <div className="container">

                    <ul className="top">
                        <li><small>Shop</small></li>
                        <li><h2>Easter<br />
                            Sale<br />
                            Highlights</h2></li>
                    </ul>

                    <div className="body">
                        
                        <div className="left">
                            <img src={this.leftImg} />
                            <div className="bottom">
                                <h2><strong>Huge</strong> <br />
                                    Collection</h2>
                                <h4>
                                    <strong>Best</strong><br />
                                    Shopping <br />
                                    Experience
                                </h4>
                            </div>

                        </div>
                        <div className="middle">
                            <img src={this.middleImg} />
                            <div className="bottom">
                                <h2><strong>Unique</strong> <br />
                                    Quality</h2>
                                <h4>
                                    <strong>Access</strong><br />
                                    All <br />
                                    Areas
                                </h4>
                            </div>
                        </div>
                        <div className="right">
                            <img src={this.rightImg} />
                            <div className="bottom">
                                <h2>On Sale
                                </h2>
                                <h4>
                                    <strong>Competitive</strong><br />
                                    Discounts <br />
                                    Available
                            </h4>
                            </div>
                        </div>
                    </div>
                    <div className="slide-indicator">
                        <div id="indicator1" ></div>
                        <div id="indicator2" onClick={(e) => this.slideTo(e)}></div>
                        <div id="indicator3"></div>
                        <div id="indicator4"></div>
                        <div className="indicator">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
