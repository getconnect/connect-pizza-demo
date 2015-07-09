import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class SalesByPeriod extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ChartViz {...this.props} query={this.getQuery()}></ChartViz>
        );
    }

    getQuery() {
        return connect.query('orders')
            .select({
                totalSales: {
                    sum: 'totalPrice'
                }
            })
            .groupBy(['time.threeHourWindow', 'isDelivery']);
    }
}

SalesByPeriod.defaultProps = {
    id: 'sales-by-period',
    chartOptions: {
        title: 'Sales By Time Period',
        fields: {
            totalSales: {
                label: 'Total Sales ($)',
                valueFormatter: formatters.dollars
            },
            isDelivery: {
                valueFormatter: (value) => value ? 'Delivered' : 'Pick Up'
            }
        },
        chart: {
            type: 'bar',
            yAxis: {
                valueFormatter: formatters.dollars
            }
        }
    }
}

export default SalesByPeriod;