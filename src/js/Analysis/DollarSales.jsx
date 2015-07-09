import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';
import TextViz from './TextViz.jsx'
import numeral from 'numeral';

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
        return connect.query('carsales')
                .select({
                    totalSales: {
                        sum: 'cost'
                    }
                });
    }
}

DollarSales.defaultProps = { 
    title: 'Electric Car Sales 2018 ($)',
    id: 'dollar-sales',
    fieldName: 'totalSales',
    formatter: (value) => {
        return numeral(value).format('$0.0a');
    }
}

export default DollarSales;