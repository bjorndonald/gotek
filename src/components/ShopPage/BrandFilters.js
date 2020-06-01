import React, { Component, Fragment } from 'react';
import $ from 'jquery';

export class BrandFilters extends Component {
    showFilter(e) {
        console.log(e.target);
        $(e.target).parent().find('ul').slideToggle();
    }

    render() {
        return (
            <Fragment>
                <div className="brand-filters filter-section web-filter">
                    <h3>Brands</h3>
                    <ul>
                        <li><label><input type="checkbox" /> All Brands</label></li>
                        <li><label><input type="checkbox" /> 101 london</label></li>
                        <li><label><input type="checkbox" /> 360 cashmere</label></li>
                        <li><label><input type="checkbox" /> American vintage</label></li>
                        <li><label><input type="checkbox" /> Baum und pferdgarten</label></li>
                        <li><label><input type="checkbox" /> Bellerose</label></li>
                        <li><label><input type="checkbox" /> Charlotte simone</label></li>
                        <li><label><input type="checkbox" /> Diane von furstenberg</label></li>
                        <li><label><input type="checkbox" /> Golden goose</label></li>
                        <li><label><input type="checkbox" /> Hale bob</label></li>
                    </ul>
                </div>

                <div className="brand-filters filter-section mobile-filter">
                    <h3 onClick={(e)=>{this.showFilter(e)}}>Brands <div id="down-triangle"></div></h3>
                    <ul>
                        <li><label><input type="checkbox" /> All Brands</label></li>
                        <li><label><input type="checkbox" /> 101 london</label></li>
                        <li><label><input type="checkbox" /> 360 cashmere</label></li>
                        <li><label><input type="checkbox" /> American vintage</label></li>
                        <li><label><input type="checkbox" /> Baum und pferdgarten</label></li>
                        <li><label><input type="checkbox" /> Bellerose</label></li>
                        <li><label><input type="checkbox" /> Charlotte simone</label></li>
                        <li><label><input type="checkbox" /> Diane von furstenberg</label></li>
                        <li><label><input type="checkbox" /> Golden goose</label></li>
                        <li><label><input type="checkbox" /> Hale bob</label></li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default BrandFilters
