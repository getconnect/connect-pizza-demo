import React from 'react';
import connect from '../connect.js';
import ChartViz from './ChartViz.jsx';
import formatters from './formatters.js';

class FavouritePizzaType extends React.Component {

    render() {
        return (
            <ChartViz options={this.props.options} query={this.getQuery()} />
        );
    }

    getQuery() {
        return connect.query('orders')
            .select({
                quantity: 'count'
            })
            .groupBy('pizza.type.value')
            .timeframe('this_week');// TODO: implememnt favourite Pizza type
    }

}
FavouritePizzaType.defaultProps = {
    options: { }
}

export default FavouritePizzaType;
