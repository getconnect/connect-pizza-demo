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
        return connect.query('orders') //orders is the collection we want to query.
            .select({                
                totalSales: { //totalSales is an alias for our sum: 'totalPrice' aggregation.
                    sum: 'totalPrice' //we are summing the value of the totalPrice field in our events.
                }
            })
            .timeframe(this.props.timeframe) // eg. 'this_week'
            .interval(this.props.interval) // eg. 'daily'
            .timezone('Australia/Brisbane'); //The timezone we want to see the results in.
    }
}

SalesByTime.defaultProps = {
    chartOptions: {
        title: 'Sales Over Time', //The title above the chart
        fields: {
            totalSales: {
                label: 'Total Sales ($)', //The label used in the legend / tooltip
                valueFormatter: formatters.dollars //The formatter used for 'totalSales' values
            }
        },
        chart: {
            type: 'area-spline', //The type of chart
            yAxis: {
                valueFormatter: formatters.dollars //The formatter used for the values on the y axis.
            }
        }
    }
}

export default SalesByTime;