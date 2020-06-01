import React, { Component } from 'react';
import Utilities from './Utilities';
import Products from './Products';

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <Utilities />
                <Products />
            </div>
        )
    }
}

export default Content
