import React, { Component, Fragment } from 'react';
import $ from 'jquery';

export class SizeFilters extends Component {
    showFilter(e) {
        console.log(e.target);
        $(e.target).parent().find('ul').slideToggle();
    }

    render() {
        return (
            <Fragment>
                <div className="brand-filters filter-section web-filter">
                    <h3>Size</h3>
                    <ul>
                        <li><label><input type="checkbox" /> Show All</label></li>
                        <li><label><input type="checkbox" /> 6</label></li>
                        <li><label><input type="checkbox" /> 8</label></li>
                        <li><label><input type="checkbox" /> 10</label></li>
                        <li><label><input type="checkbox" /> 12</label></li>
                        <li><label><input type="checkbox" /> 14</label></li>
                        <li><label><input type="checkbox" /> 16</label></li>
                        <li><label><input type="checkbox" /> Xs</label></li>
                        <li><label><input type="checkbox" /> S</label></li>
                        <li><label><input type="checkbox" /> M</label></li>
                    </ul>
                </div>

                <div className="brand-filters filter-section mobile-filter">
                    <h3 onClick={(e)=>{this.showFilter(e)}}>Size <div id="down-triangle"></div></h3>
                    <ul>
                        <li><label><input type="checkbox" /> Show All</label></li>
                        <li><label><input type="checkbox" /> 6</label></li>
                        <li><label><input type="checkbox" /> 8</label></li>
                        <li><label><input type="checkbox" /> 10</label></li>
                        <li><label><input type="checkbox" /> 12</label></li>
                        <li><label><input type="checkbox" /> 14</label></li>
                        <li><label><input type="checkbox" /> 16</label></li>
                        <li><label><input type="checkbox" /> Xs</label></li>
                        <li><label><input type="checkbox" /> S</label></li>
                        <li><label><input type="checkbox" /> M</label></li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default SizeFilters
