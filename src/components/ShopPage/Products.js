import React, { Component } from 'react';
import NextIcon from './../_util/NextIcon';
import Product from './Product';

export class Products extends Component {
    render() {
        return (
            <div className="products">
                <div className="container">
                    <Product id={1}/>
                    <Product id={2}/>
                    <Product id={3}/>
                    <Product id={4}/>
                    <Product id={5}/>
                    <Product id={6}/>
                    <Product id={1}/>
                    <Product id={2}/>
                </div>
                <div className="product-index">
                    <a>Next <NextIcon /> </a>
                </div>
            </div>
        )
    }
}

export default Products
