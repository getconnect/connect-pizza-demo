import React from 'react';
import connect from '../connect.js';
import TextViz from './TextViz.jsx'
import formatters from './formatters.js';

class DollarSales extends React.Component {

    render() {
        return (
            <TextViz options={this.props.options} query={this.getQuery()} />
        );
    }

    getQuery() {
        return connect.query('orders')
                .select({
                    totalSales: {
                        sum: 'totalPrice'
                    }
                })
                .timeframe(this.props.timeframe)
                .timezone('Australia/Brisbane');
    }
}

DollarSales.defaultProps = {
    options: {
        title: 'Sales ($)',
        fields: {
            totalSales: {
                format: formatters.dollars
            }
        }
    }
}

export default DollarSales;
