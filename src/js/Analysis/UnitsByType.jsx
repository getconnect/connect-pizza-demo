import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class UnitsByType extends React.Component {
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

UnitsByType.defaultProps = {
    id: 'units-by-type',
    chartOptions: {
        title: 'Most Popular Pizza',
        fields: {
            totalUnits: {
                label: 'Total',
                valueFormatter: formatters.units
            }
        },
        chart: {
            type: 'bar'
        }
    }
}

export default UnitsByType;