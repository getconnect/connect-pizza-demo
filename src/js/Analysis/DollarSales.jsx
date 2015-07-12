import React from 'react';
import connect from '../connect.js';
import TextViz from './TextViz.jsx'
import formatters from './formatters.js';

class DollarSales extends React.Component {

    render() {
        return (
            <TextViz {...this.props} query={this.getQuery()} />
        );
    }

    getQuery() {
        return connect.query('orders')
                .select({
                    totalSales: {
                        sum: 'totalPrice'
                    }
                })
                .timeframe(this.props.timeframe);
    }
}

DollarSales.defaultProps = {
    textOptions: {
        title: 'Sales ($)',
        fields: {
            totalSales: {
                valueFormatter: formatters.dollars
            }
        }
    }
}

export default DollarSales;