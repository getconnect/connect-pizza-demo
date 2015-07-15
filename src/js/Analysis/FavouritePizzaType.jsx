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
        return null;// TODO: implememnt favourite Pizza type
    }

}
FavouritePizzaType.defaultProps = {
    options: { }
}

export default FavouritePizzaType;
