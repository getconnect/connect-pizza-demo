import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';

class TableViz extends React.Component {
    constructor(props) {
        super(props);       
    }

    render() {
        var style = {
            height: '500px'
        };

        return (
            <div id={this.props.id} ref="tableVizContainer" style={style}></div>
        );
    }

    componentDidMount() {
        var query = this.props.query,
            container = React.findDOMNode(this.refs.tableVizContainer),
            tableOptions = this.props.tableOptions;

        this.viz = connect.table(query, container, tableOptions);
    }
    

    componentDidUpdate() {
        this.viz.update(this.props.query);
    }
}

export default TableViz;