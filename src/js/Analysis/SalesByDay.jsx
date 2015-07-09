import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class SalesByDay extends React.Component {
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
            .groupBy(['time.dayOfWeek']);
    }
}

SalesByDay.defaultProps = {
    id: 'sales-by-day',
    chartOptions: {
        title: 'Sales By Day of the Week',
        fields: {
            totalSales: {
                label: 'Total Sales ($)',
                valueFormatter: formatters.dollars
            }
        },
        chart: {
            type: 'bar',
            colors: ['#9b59b6'],
            yAxis: {
                valueFormatter: formatters.dollars
            }
        }
    }
}

export default SalesByDay;