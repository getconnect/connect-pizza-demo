import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class FavouritePizzaType extends React.Component {

    render() {
        return (
            <ChartViz {...this.props} query={this.getQuery()} />
        );
    }

    getQuery() {
        return null; // TODO: Build a query
    }

}
FavouritePizzaType.defaultProps = {
    chartOptions: {
        chart: {
            type: 'bar'
        }
    }
}

exports default FavouritePizzaType;