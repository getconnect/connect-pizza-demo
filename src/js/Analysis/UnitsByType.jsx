import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class UnitsByType extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ChartViz {...this.props} query={this.getQuery()}></ChartViz>
        );
    }

    getQuery() {
        return connect.query('orders')
            .select({
                totalNumPizzas: 'count'
            })
            .groupBy(['pizza.type.value']);
    }
}

UnitsByType.defaultProps = {
    id: 'units-by-type',
    chartOptions: {
        title: 'Most Popular Pizza',
        fields: {
            totalNumPizzas: {
                label: 'No. of Pizzas',
                valueFormatter: formatters.units
            }
        },
        chart: {
            type: 'bar',
            colors: ['#3498db']
        }
    }
}

export default UnitsByType;