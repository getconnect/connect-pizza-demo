import React from 'react';
import connect from '../connect.js';
import GaugeViz from './GaugeViz.jsx';
import formatters from './formatters.js';
import _ from 'underscore'

class DeliverySales extends React.Component {

    render() {
        return (
            <GaugeViz options={this.props.options} query={() => this.getQuery()} />
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
            .timezone('Australia/Brisbane')
            .groupBy(['isDelivery'])
            .execute()
            .then((response) => {
                if (!response.results || !response.results.length)
                    return response;

                var sumFunction = (currentTotal, sale) => currentTotal + sale.totalSales,
                    totalSales = _.reduce(response.results, sumFunction, 0),
                    deliverySales = _.where(response.results, { isDelivery: true }),
                    totalDeliverySales = _.reduce(deliverySales, sumFunction, 0);

                response.results = [{
                    totalSales: totalSales,
                    totalDeliverySales: totalDeliverySales
                }];

                response.metadata.groups = [];

                return response;
            });
    }
}

DeliverySales.defaultProps = {
    options: {
        title: 'Delivery Sales',
        fields: {
            totalDeliverySales: {
                label: 'Delivery Sales',
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

export default DeliverySales;