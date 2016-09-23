import React from 'react';
import connect from '../connect.js';
import Timer from './RefreshTimer.js';

class TextViz extends React.Component {

    render() {
        return (
            <div ref="textVizContainer" />
        );
    }

    componentDidMount() {
        let { query, options } = this.props;
        let container = React.findDOMNode(this.refs.textVizContainer);

        this.viz = connect.visualize(query)
            .as('text')
            .inside(container)
            .with(options)
            .draw();
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

export default TextViz;
