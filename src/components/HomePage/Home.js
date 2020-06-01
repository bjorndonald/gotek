import React, { Component } from 'react';
import './style.scss';
import NavMain from './../_Layout/NavMain';
import Footer from './../_Layout/Footer';
import Header from './Header';
import Content from './Content';

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <NavMain />
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Home
