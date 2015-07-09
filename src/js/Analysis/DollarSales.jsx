import React from 'react';
import connect from '../connect.js';
import TextViz from './TextViz.jsx'
import formatters from './formatters.js';

class DollarSales extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextViz {...this.props} query={this.getQuery()}></TextViz>
        );
    }

    getQuery() {
        return connect.query('orders')
                .select({
                    totalSales: {
                        sum: 'totalPrice'
                    }
                });
    }
}

DollarSales.defaultProps = { 
    id: 'dollar-sales',
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