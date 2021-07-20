import React, { Component } from 'react';
import slide1 from './../../img/slide1.jpg';
import $ from 'jquery';

export class Slide extends Component {
    constructor(props){
        super(props);
        this.img = require(`./../../img/slide${this.props.index}.jpg`);
        this.left = require(`./../../img/${this.props.slide.left}.svg`);
        this.right = null;
        if(this.props.slide.right)
            this.right = require(`./../../img/${this.props.slide.right}.svg`);
    }

    cursorMove(e){
        var cursor = $('.eye-cursor');
        cursor.css({
            display: 'flex',
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
        
    }

    cursorLeave(e){
        var cursor = $('.eye-cursor');
        cursor.css({
            display: 'none'
        });
        
    }

    render() {
        return (
            <div onMouseMove={(e) => this.cursorMove(e)} 
            onMouseLeave={(e) => this.cursorLeave(e)} 
            className={`slide ${this.props.active ? "active": ""}`} id={`slide${this.props.index}`}>
                <div className="img-banner">
                    <div className="dark-overlay"></div>
                    <img src={this.img}  className="banner"/>
                </div>
                <h1 className={`left ${this.props.slide.right? "vertical": "horizontal"}`}>
                    <img src={this.left} />
                </h1>
                <h1 className={`right ${this.props.slide.right? "vertical": "horizontal"}`}>
                    <img src={this.right} />
                </h1>
                <div className="slide-bottom">
                    <small>{this.props.slide.section}</small>
                    {this.props.slide.string}
                </div>
            </div>
        )
    }
}

export default Slide
