import React, { Component } from 'react';
import Close from './Close'
import $ from 'jquery'

export class Popup extends Component {
    constructor(props){
        super(props);
        this.show = null;
    }

    close(){

    }

    componentDidUpdate(){
        //alert(this.props.click);
        if(this.props.click){
            this.show = 
                <div className='popup'>
                    
                    <div className='popup_inner'>
                        
                        {this.props.children}
                    </div>
                    <div className="overlay">
                    </div>
                </div>;
        }
        else{
             this.show=null;   
        }
    }
    
    render() {
        return (
            this.show
        )
    }
}

export default Popup