import React from 'react';
import connect from '../connect.js';
import Timer from './RefreshTimer.js';

class ChartViz extends React.Component {

    render() {
        var style = {
            height: '250px'
        };

        return (
            <div ref="chartVizContainer" style={style} />
        );
    }

    componentDidMount() {
        var query = this.props.query,
            container = React.findDOMNode(this.refs.chartVizContainer),
            chartOptions = this.props.chartOptions;

        this.viz = connect.chart(query, container, chartOptions);
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

export default ChartViz;