import React, { Fragment, Component } from 'react';
import DropDown from './../_util/DropDown';
import FilterIcon from './../_util/FilterIcon';
import Popup from './../_util/Popup';
import Filters from './Filters';

export class Utilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilter: true,
            done: true
        }
        this.showFilter = this.showFilter.bind(this);
        this.close = this.close.bind(this);

    }

    showFilter() {
        this.setState({
            showFilter: true,
            done: false
        }, function () {
            this.setState({
                done: true
            })
        }
        );
    }

    close() {
        this.setState({
            showFilter: false,
            done: false
        }, function () {
            this.setState({
                done: true
            })
        }
        );
    }

    render() {
        const cinemaData = {
            display: 'Sort By',
            options: [
                'Newest',
                'Price low to high',
                'Price high to low'
            ]
        }
        return (
            <Fragment>
                <Popup click={this.state.showFilter} >
                    <Filters close={this.close}/>
                </Popup>
                <div className="utilities">
                    <div className="filter-button" onClick={this.showFilter}><a>Filter</a><FilterIcon /></div>
                    <DropDown data={cinemaData} />
                </div>
            </Fragment>
        )
    }
}

export default Utilities
