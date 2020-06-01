import React, { Component } from 'react';
import ProductFilters from './ProductFilters';
import BrandFilters from './BrandFilters';
import SizeFilters from './SizeFilters';
import Close from './../_util/Close';

export class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <a className="filter-close close" onClick={this.props.close}><Close /></a>
                <div className="body">
                    <ProductFilters />
                    <BrandFilters />
                    <SizeFilters />
                </div>

                
                <div className="filter-bottom">
                    <a href="">CLEAR ALL</a>
                    <a href="">APPLY FILTERS</a>
                </div>
            </div>
        )
    }
} 

export default Filters
