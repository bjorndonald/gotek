import React, { Component, Fragment } from 'react';
import $ from 'jquery';

export class ProductFilters extends Component {

    showFilter(e) {
        console.log(e.target);
        $(e.target).parent().find('ul').slideToggle();
    }

    render() {
        return (
            <Fragment>
                <div className="product-filters filter-section web-filter">
                    <h3>Product Type</h3>
                    <ul>
                        <li><label><input type="checkbox" /> All Clothing</label></li>
                        <li><label><input type="checkbox" /> Jackets</label></li>
                        <li><label><input type="checkbox" /> Coats</label></li>
                        <li><label><input type="checkbox" /> Jeans</label></li>
                        <li><label><input type="checkbox" /> Knitwear</label></li>
                        <li><label><input type="checkbox" /> Shorts</label></li>
                        <li><label><input type="checkbox" /> Shirts</label></li>
                        <li><label><input type="checkbox" /> Suits</label></li>
                        <li><label><input type="checkbox" /> Tops</label></li>
                        <li><label><input type="checkbox" /> Jumpsuits</label></li>
                    </ul>
                </div>

                <div className="product-filters filter-section mobile-filter">
                    <h3 onClick={(e)=>{this.showFilter(e)}}>Product Type <div id="down-triangle"></div> </h3>
                    <ul>
                        <li><label><input type="checkbox" /> All Clothing</label></li>
                        <li><label><input type="checkbox" /> Jackets</label></li>
                        <li><label><input type="checkbox" /> Coats</label></li>
                        <li><label><input type="checkbox" /> Jeans</label></li>
                        <li><label><input type="checkbox" /> Knitwear</label></li>
                        <li><label><input type="checkbox" /> Shorts</label></li>
                        <li><label><input type="checkbox" /> Shirts</label></li>
                        <li><label><input type="checkbox" /> Suits</label></li>
                        <li><label><input type="checkbox" /> Tops</label></li>
                        <li><label><input type="checkbox" /> Jumpsuits</label></li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default ProductFilters
