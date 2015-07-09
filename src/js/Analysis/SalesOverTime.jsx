import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';
import ChartViz from './ChartViz.jsx'
import numeral from 'numeral';

class SalesOverTime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ChartViz {...this.props} query={this.getQuery()}></ChartViz>
        );
    }

    getQuery() {
        return connect.query('carsales')
            .select({                
                totalSales: {
                    sum: 'cost'
                },              
                units: 'count'
            })
            .groupBy(['manufacturer'])
            .interval(this.props.interval);
    }
}

SalesOverTime.defaultProps = {
    title: 'Sales Over Time',
    id: 'sales-over-time',
    interval: 'monthly',
    type: 'area',
    fields: {
        totalSales: {
            label: 'Total Sales ($)',
            valueFormatter: (value) => {
                console.log(value);
                return numeral(value).format('$0.0a');
            }
        }
    }
}

export default SalesOverTime;