import React from 'react';
import connect from '../connect.js';
import Timer from './RefreshTimer.js';

class ChartViz extends React.Component {

    render() {
        //Return a div that will be the container for the chart.
        return (
            <div ref="chartVizContainer" style={{ height: '250px' }} />
        );
    }
    //Invoked once immediately after the initial rendering occurs
    componentDidMount() {
        let { query, options } = this.props;
        let container = React.findDOMNode(this.refs.chartVizContainer);

        this.viz = connect.chart(query, container, options);

        this.timer = new Timer(this.viz);
    }

    //Invoked immediately before a component is unmounted from the DOM.
    componentWillUnmount() {
        this.timer.destroy(); //Stop the timer from calling refresh on the chart.
        this.viz.destroy(); //Tell the chart to clean itself up.
    }

    //Invoked immediately after the component's updates are flushed to the DOM.
    //This method is not called for the initial render.
    componentDidUpdate() {
        this.viz.update(this.props.query);
    }
}

export default ChartViz;
