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
        return connect.query('carsales')
            .select({                
                totalSales: {
                    sum: 'cost'
                }
            })
            .groupBy(['manufacturer']);
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
            type: 'bar'
        }
    }
}

export default SalesByDay;