import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';
import Timer from './RefreshTimer.js';

class TableViz extends React.Component {

    render() {
        return (
            <div ref="tableVizContainer" style={ { height: '500px' } } />
        );
    }

    componentDidMount() {
        let { query, options } = this.props;
        let container = React.findDOMNode(this.refs.gaugeVizContainer);

        this.viz = connect.table(query, container, tableOptions);
        this.timer = new Timer(this.viz);
    }

    componentWillUnmount() {
        this.timer.destroy();
        this.viz.destroy();
    }
    
    componentDidUpdate() {
        this.viz.update(this.props.query);
    }
}

export default TableViz;