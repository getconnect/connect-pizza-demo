import React from 'react';
import connect from '../connect.js';
import Timer from './RefreshTimer.js';

class GaugeViz extends React.Component {

    render() {
        var style = {
            height: '200px'
        };

        return (
            <div ref="gaugeVizContainer" style={style} />
        );
    }

    componentDidMount() {
        var query = this.props.query,
            container = React.findDOMNode(this.refs.gaugeVizContainer),
            chartOptions = this.props.chartOptions;

        this.viz = connect.gauge(query, container, chartOptions);
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