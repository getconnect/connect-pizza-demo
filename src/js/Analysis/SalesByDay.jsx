import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class SalesByDay extends React.Component {

    render() {
        return (
            <ChartViz {...this.props} query={this.getQuery()} />
        );
    }

    getQuery() {
        return connect.query('orders')
            .select({            
                totalSales: {
                    sum: 'totalPrice'
                }
            })
            .timeframe(this.props.timeframe)
            .groupBy(['time.dayOfWeek']);
    }
}

SalesByDay.defaultProps = {
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