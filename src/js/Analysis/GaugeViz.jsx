import React from 'react';
import connect from '../connect.js';
import Timer from './RefreshTimer.js';

class GaugeViz extends React.Component {

    render() {
        return (
            <div ref="gaugeVizContainer" style={{ height: '200px' }} />
        );
    }

    componentDidMount() {
        let { query, options } = this.props;
        let container = React.findDOMNode(this.refs.gaugeVizContainer);

        this.viz = connect.gauge(query, container, options);
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

export default GaugeViz;