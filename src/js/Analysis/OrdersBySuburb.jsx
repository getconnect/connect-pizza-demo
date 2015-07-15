import React from 'react';
import _ from 'underscore';
import connect from '../connect.js';
import TableViz from './TableViz.jsx';
import formatters from './formatters.js';

var suburbNameMapper = (suburbName) => !suburbName ? 'Unknown' : suburbName;

class OrdersBySuburb extends React.Component {

    render() {
        return (
            <TableViz options={this.props.options} query={() => this.getQuery()} />
        );
    }

    getQuery() {
        var suburbProperty = 'address.components.locality';

        return connect.query('orders')
                .select({
                    avgOrderTotal: {
                        avg: 'totalPrice'
                    },
                    maxOrderTotal: {
                        max: 'totalPrice'
                    },
                    unitsTotal: {
                        sum: 'quantity'
                    },                  
                    dollarsTotal: {
                        sum: 'totalPrice'
                    }
                })
                .timeframe(this.props.timeframe)
                .timezone('Australia/Brisbane')
                .groupBy([suburbProperty])
                .execute()
                .then((response) => {
                    response.results = _.sortBy(response.results, (suburbResult) => {
                        return suburbNameMapper(suburbResult[suburbProperty])
                    });
                    return response;
                });
    }
}

OrdersBySuburb.defaultProps = {
    tableOptions: {
        fields: {
            'address.components.locality': {
                label: 'Suburb',
                valueFormatter: suburbNameMapper
            },
            'avgOrderTotal': {
                label: 'Avg Order ($)',
                valueFormatter: formatters.dollars
            },
            'maxOrderTotal': {
                label: 'Largest Order',
                valueFormatter: formatters.dollars
            },
            'unitsTotal': {
                label: 'Sales (Units)',
                valueFormatter: formatters.units
            },
            'dollarsTotal': {
                label: 'Sales ($)',
                valueFormatter: formatters.dollars
            }
        }
    }
}

export default OrdersBySuburb;