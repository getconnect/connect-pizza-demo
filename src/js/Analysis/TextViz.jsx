import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';

class TextViz extends React.Component {
    constructor(props) {
        super(props);       
    }

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
    }

    componentDidUpdate() {
        this.viz.update(this.props.query);
    }
}

export default TextViz;