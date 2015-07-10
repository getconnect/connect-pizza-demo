import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';
import Timer from './RefreshTimer.js';

class TextViz extends React.Component {
    
    render() {
        return (
            <div id={this.props.id} ref="textVizContainer"></div>
        );
    }

    componentDidMount() {
        var query = this.props.query,
            container = React.findDOMNode(this.refs.textVizContainer),
            textOptions = this.props.textOptions;

        this.viz = connect.text(query, container, textOptions);
        this.timer = new Timer(this.viz);
    }

    componentWillUnmount() {
        this.timer.destroy();
    }

    componentDidUpdate() {
        this.viz.update(this.props.query);
    }
}

export default TextViz;