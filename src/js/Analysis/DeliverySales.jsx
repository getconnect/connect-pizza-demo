import React from 'react';
import connect from '../connect.js';
import GaugeViz from './GaugeViz.jsx';
import formatters from './formatters.js';
import _ from 'underscore'

class DevliverySales extends React.Component {

    render() {
        return (
            <GaugeViz {...this.props} query={() => this.getQuery()} />
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
            .groupBy(['isDelivery'])
            .execute()
            .then((response) => {
                var sumFunction = (currentTotal, sale) => currentTotal + sale.totalSales,
                    totalSales = _.reduce(response.results, sumFunction, 0),
                    deliverySales = _.find(response.results, { isDelivery: true }).totalSales;

                response.results = [{
                    totalSales: totalSales,
                    deliverySales: deliverySales
                }];

                response.metadata.groups = [];

                return response;
            });
    }
}

DevliverySales.defaultProps = {
    chartOptions: {
        title: 'Devlivery Sales',
        fields: {
            deliverySales: {
                label: 'Devlivery Sales',
                valueFormatter: formatters.dollars
            }
        },
        gauge: {
            color: '#9b59b6',
            min: 0,
            max: 'totalSales'
        }
    }
}

export default DevliverySales;