import React from 'react';
import connect from '../connect.js';
import TextViz from './TextViz.jsx';
import formatters from './formatters.js';

class UnitSales extends React.Component {
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
                    totalNumPizzas: {
                        sum: 'quantity'
                    }
                });
    }
}

UnitSales.defaultProps = { 
    id: 'unit-sales',
    textOptions: {
        title: 'Sales (Units)',
        fields: {
            totalNumPizzas: {
                valueFormatter: formatters.units
            }
        }
    }
}

export default UnitSales;