import React from 'react';
import connect from '../connect.js';
import GaugeViz from './GaugeViz.jsx';
import formatters from './formatters.js';
import _ from 'underscore'

class PickupSales extends React.Component {

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
                    pickupSales = _.where(response.results, { isDelivery: false }),
                    totalPickupSales = _.reduce(pickupSales, sumFunction, 0);

                response.results = [{
                    totalSales: totalSales,
                    totalPickupSales: totalPickupSales
                }];

                response.metadata.groups = [];

                return response;
            });
    }
}

PickupSales.defaultProps = {
    chartOptions: {
        title: 'Pickup Sales',
        fields: {
            totalPickupSales: {
                label: 'Pickup Sales',
                valueFormatter: formatters.dollars
            }
        },
        gauge: {
            color: '#16a085',
            min: 0,
            max: 'totalSales'
        }
    }
}

export default PickupSales;