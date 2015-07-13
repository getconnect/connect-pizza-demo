import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class SalesByTime extends React.Component {

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
            .interval(this.props.interval);
    }
}

SalesByTime.defaultProps = {
    chartOptions: {
        title: 'Sales Over Time',
        fields: {
            totalSales: {
                label: 'Total Sales ($)',
                valueFormatter: formatters.dollars
            }
        },
        chart: {
            type: 'area-spline',
            yAxis: {
                valueFormatter: formatters.dollars
            }
        }
    }
}

export default SalesByTime;
