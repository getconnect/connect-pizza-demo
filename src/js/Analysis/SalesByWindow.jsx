import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import TableViz from './TableViz.jsx';
import formatters from './formatters.js';
import _ from 'underscore';

class SalesByWindow extends React.Component {

    render() {
        return (
            <ChartViz options={this.props.options} query={() => this.getQuery()} />
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
            .groupBy(['time.threeHourWindow', 'isDelivery', 'deliveryType'])
            .execute()
            .then((response) => {
                var groups = response.metadata.groups;

                response.results = _
                    .chain(response.results)
                    .groupBy('time.threeHourWindow')
                    .map((salesByDelivery, threeHourWindow) => {
                        var deliverySales = _.filter(salesByDelivery, (saleByDelivery) => {
                                var isDeliveryWithNoType = saleByDelivery.isDelivery && !saleByDelivery.deliveryType,
                                    isStandardDelivery = saleByDelivery.deliveryType === 'Delivery';

                                return isDeliveryWithNoType || isStandardDelivery;
                            }),
                            droneSales = _.filter(salesByDelivery, (saleByDelivery) => {
                                var isDroneDelivery = saleByDelivery.deliveryType === 'Express Drone';

                                return isDroneDelivery;
                            }),
                            pickupSales = _.where(salesByDelivery, { isDelivery: false }),
                            sumFunction = (currentTotal, saleByDelivery) => currentTotal + saleByDelivery.totalSales;

                        return {
                            'time.threeHourWindow': threeHourWindow,
                            totalDeliverySales: _.reduce(deliverySales, sumFunction, 0),
                            totalDroneSales: _.reduce(droneSales, sumFunction, 0),
                            totalPickupSales: _.reduce(pickupSales, sumFunction, 0)
                        }
                    })
                    .value();

                response.metadata.groups = groups.slice(0, 1);

                return response;
            });
    }
}

SalesByWindow.defaultProps = {
    chartOptions: {
        title: 'Sales By Time Period',
        fields: {
            totalDeliverySales: {
                label: 'Delivery Sales ($)',
                valueFormatter: formatters.dollars
            },
            totalDroneSales: {
                label: 'Drone Sales ($)',
                valueFormatter: formatters.dollars
            },
            totalPickupSales: {
                label: 'Pick-up Sales ($)',
                valueFormatter: formatters.dollars
            }
        },
        chart: {
            type: 'bar',
            yAxis: {
                valueFormatter: formatters.dollars
            },
        }
    }
}

export default SalesByWindow;