import React from 'react';
import connect from '../connect.js';
import TextViz from './TextViz.jsx';
import formatters from './formatters.js';

class UnitSales extends React.Component {

    render() {
        return (
            <TextViz options={this.props.options} query={this.getQuery()} />
        );
    }

    getQuery() {
        return connect.query('orders')
                .select({
                    totalNumPizzas: {
                        sum: 'quantity'
                    }
                })
                .timeframe(this.props.timeframe)
                .timezone('Australia/Brisbane');
    }
}

UnitSales.defaultProps = {
    options: {
        title: 'Sales (Units)',
        fields: {
            totalNumPizzas: {
                valueFormatter: formatters.units
            }
        }
    }
}

export default UnitSales;