import React from 'react';
import connect from '../connect.js';
import TableViz from './TableViz.jsx';
import formatters from './formatters.js';

class OrdersBySuburb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableViz {...this.props} query={this.getQuery()}></TableViz>
        );
    }

    getQuery() {
        return connect.query('carsales')
                .select({
                    units: 'count',
                    sales: {
                        sum: 'cost'
                    }
                })
                .groupBy(['manufacturer', 'model']);
    }
}

OrdersBySuburb.defaultProps = {
    id: 'orders-by-suburb',
    tableOptions: {
        fields: {
            'manufacturer': {
                label: 'Manufacturer'
            },
            'model': {
                label: 'Model',
            },
            'units': {
                label: 'Sales (Units)'
            },
            'sales': {
                label: 'Sales ($)',
                valueFormatter: formatters.dollars
            }            
        }
    }
}

export default OrdersBySuburb;