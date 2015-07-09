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
        return connect.query('carsales')
                .select({
                    totalSales: {
                        sum: 'cost'
                    }
                });
    }
}

UnitSales.defaultProps = { 
    id: 'unit-sales',
    textOptions: {
        title: 'Sales (Units)',
        fields: {
            totalSales: {
                valueFormatter: formatters.units
            }
        }
    }
}

export default UnitSales;