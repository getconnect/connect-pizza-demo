import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class SalesByTime extends React.Component {
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
                }
            })
            .interval(this.props.interval);
    }
}

SalesByTime.defaultProps = {
    id: 'sales-over-time',
    interval: 'monthly',
    chartOptions: {
        title: 'Sales Over Time',
        fields: {
            totalSales: {
                label: 'Total Sales ($)',
                valueFormatter: formatters.dollars
            }
        },
        chart: {
            type: 'area-spline'
        }
    }
}

export default SalesByTime;