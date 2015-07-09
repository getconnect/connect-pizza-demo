import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';
import TextViz from './TextViz.jsx'

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
    title: 'Electric Car Sales 2018 (units)',
    id: 'unit-sales', 
    fieldName: 'totalSales',
    formatter: (value) => {
        return value;
    }
}

export default UnitSales;