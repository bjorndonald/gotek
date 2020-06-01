import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div className="product">
                <img src={require(`./../../img/prod${this.props.id}.jpg`)}/>
                <h3>TOPS & TEES</h3>
                <h4>Raybans three piece men's suit</h4>
                <p><span>&#8358;8,600</span> <span>&#8358;11,500</span></p>
            </div>
        )
    }
}

export default Product
