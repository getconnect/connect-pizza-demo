import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';
import Timer from './RefreshTimer.js';

class TableViz extends React.Component {

    render() {
        var style = {
            height: '500px'
        };

        return (
            <div ref="tableVizContainer" style={style} />
        );
    }

    componentDidMount() {
        var query = this.props.query,
            container = React.findDOMNode(this.refs.tableVizContainer),
            tableOptions = this.props.tableOptions;

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