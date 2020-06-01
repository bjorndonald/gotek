import React, { Component } from 'react';
import Footer from './../_Layout/Footer';
import NavMain from './../_Layout/NavMain';
import Header from './Header';
import Content from './Content';
import Top from './../_Layout/Top';
import './style.scss';

export class Shop extends Component {
    render() {
        return (
            <div id="shop">
                <NavMain />
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Shop
