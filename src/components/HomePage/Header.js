import React, { Component } from 'react';
import Slider from './Slider';
import $ from 'jquery';
import EyeIcon from './../_util/EyeIcon';
import BackIcon from './../_util/BackIcon';
import NextIcon from './../_util/NextIcon';

export class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            id: 1,
            done: true
        }
    }
    // cursorMove(e){
    //     var cursor = $('.cursor');
    //     cursor.css({
    //         top: e.clientY - cursor.height() / 2,
    //         left: e.clientX - cursor.width() / 2
    //     });
    // }

    slideTo(e){
        var idstring = $(e.target).attr('id');
        var id = parseInt(idstring.replace(/\D/g,''));
        //console.log(id);
        this.setState({
            id: id,
            done: false
        }, function(){
            this.setState({
                done: true
            });
            
        });
        
    }

    render() { 
        return (
            <header >
                <div className="container">
                    <Slider id={this.state.id} />
                    <div className="slide-indicator">
                        <div id="indicator1" ></div>
                        <div id="indicator2" onClick={(e) => this.slideTo(e)}></div>
                        <div id="indicator3"></div>
                        <div id="indicator4"></div>
                        <div className="indicator">
                        </div>
                    </div>
                </div>

                <div class="eye-cursor"><EyeIcon /></div>
                <div class="left-cursor"><BackIcon /></div>
                <div class="right-cursor"><NextIcon /></div>
            </header>
        )
    }
}

export default Header
