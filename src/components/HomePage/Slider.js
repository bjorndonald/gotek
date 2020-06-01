import React, { Component,Fragment } from 'react';
import Slide from './Slide';
import $ from 'jquery';

export class Slider extends Component {
    constructor(props){
        super(props);
        this.slides= [
            {
                section: "Shop",
                string: <Fragment><h1>30% Off<br/> Select <br /> Products</h1>
                        <h1>Free <br/>Shipping <br /> Available</h1></Fragment>,
                active: true,
                left: 'SlideTitle1',
                right: null
            },
            {
                section: "Save",
                string: <Fragment><h1>30% Off<br/> Select <br /> Products</h1>
                <h1>Free <br/>Shipping <br /> Available</h1></Fragment>,
                active: false,
                left: 'SlideTitle2',
                right: null
            }
        ];
        
    }
    componentWillUpdate(){
        var stringid = $('.slide.active').attr("id");
        var numid = stringid.replace(/[^\d]+/,'');
        var id = parseInt(numid);
        //console.log(this.props.id);
        if(id !== this.props.id){
            for (var i=0; i<this.props.id-id; i++){
                this.onNext();
            }
        }

        
    }
    

    leftcursorMove(e){
        var cursor = $('.left-cursor');
        cursor.css({
            display: 'flex',
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
        
    }
    rightcursorMove(e){
        var cursor = $('.right-cursor');
        //alert();
        cursor.css({
            display: 'flex',
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
        
    }

    onNext(){
        var stringid = $('.slide.active').attr("id");
        var numid = stringid.replace(/[^\d]+/,'');
        var id = parseFloat(numid);
        var nextid = id + 1;
        alert(nextid);
        $(`#slide${nextid}`).css('z-index',"3");
        var left = $('.slide.active').offset().left;
        var ileft = $('header .indicator').offset().left;
        var width = $('header .slide-indicator').width();
        var iwidth = $('header .indicator').width();
        alert(id * iwidth);
        $(`#slide${id} .left, #slide${id} .slide-bottom`).animate({
            opacity: 0
        },300, function(){
            $(`.left-border, .right-border`).css('z-index',"4");

            $(`header .indicator`).animate({
                left: `${id * iwidth}px`
            }, 500);

            $(`#slide${nextid}`).animate({
                left: `${left}px`
            }, 500, function(){
                $(`#slide${id}`).css('left','calc((100vw * 11 / 12) + 20px)');
                $(`.left-border, .right-border`).css('z-index',"3");

                $(`#slide${nextid} .left, #slide${nextid} .slide-bottom`).animate({
                    opacity: 1
                },300);
            });
        });
    }

    leftmouseLeave(e){
        var cursor = $('.left-cursor');
        //alert();
        cursor.css({
            display: 'none',
        });
    }

    rightmouseLeave(e){
        var cursor = $('.right-cursor');
        //alert();
        cursor.css({
            display: 'none',
        });
    }

    render() {
        return (
            <div className="slider">
                <div 
                className="left-border">
                    <div onMouseMove={(e) => this.leftcursorMove(e)} 
                onMouseLeave={(e) => this.leftmouseLeave(e)}
                onClick={this.onBack}></div>
                </div>
                <div className="slider-wrapper">
                    <Slide index="1" active={true} 
                    slide = {this.slides[0]}/>
                    <Slide index="2"
                    slide = {this.slides[1]}/>
                </div>
                <div onMouseMove={(e) => this.rightcursorMove(e)} 
                onMouseLeave={(e) => this.rightmouseLeave(e)}
                className="right-border" onClick={this.onNext}>
                    <div><span>100 / 500</span></div>
                </div>
                {/* <div className="slider-index">
                    <span><p>100</p> / <p>500</p></span>
                </div> */}
            </div>
        )
    }
}

export default Slider
