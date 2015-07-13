import React from 'react';
import connect from '../connect.js';
import GaugeViz from './GaugeViz.jsx';
import formatters from './formatters.js';
import _ from 'underscore'

class PickupSales extends React.Component {

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
                    pickupSales = _.find(response.results, { isDelivery: false }).totalSales;

                response.results = [{
                    totalSales: totalSales,
                    pickupSales: pickupSales
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
            pickupSales: {
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