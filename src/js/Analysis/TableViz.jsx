import React from 'react';
import connect from '../connect.js';

class TableViz extends React.Component {

    render() {
        return (
            <div ref="tableVizContainer" className="connect-table-fixed-header" style={ { height: '500px' } } />
        );
    }

    componentDidMount() {
        let { query, options } = this.props;
        let container = React.findDOMNode(this.refs.tableVizContainer);

        this.viz = connect.table(query, container, options);
    }

    componentWillUnmount() {
        this.viz.destroy();
    }
    
    componentDidUpdate() {
        this.viz.update(this.props.query);
    }
}

export default TableViz;