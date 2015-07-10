import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class UnitsByType extends React.Component {

    render() {
        return (
            <ChartViz {...this.props} query={this.getQuery()} />
        );
    }

    getQuery() {
        return connect.query('orders')
            .select({
                totalNumPizzas: { sum: 'quantity' }
            })
            .timeframe(this.props.timeframe)
            .groupBy(['pizza.type.value']);
    }
}

UnitsByType.defaultProps = {
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
            colors: ['#d35400']
        }
    }
}

export default UnitsByType;