import React from 'react';
import connect from '../connect.js';
import { Button, Badge } from 'rebass';

class TextViz extends React.Component {
    constructor(props) {
        super(props);       
    }

    render() {
        var style = {
            height: '250px'
        };

        return (
            <div id={this.props.id} ref="chartVizContainer" style={style}></div>
        );
    }

    componentDidMount() {
        var query = this.props.query,
            container = React.findDOMNode(this.refs.chartVizContainer),
            title = this.props.title,
            type = this.props.type,
            fields = this.props.fields;

        console.log(fields);
        this.viz = connect.chart(query, container, {
            title: title,
            fields: fields,
            chart: {
                type: type
            }
        });
    }

    componentDidUpdate() {
        this.viz.update(this.props.query);
    }
}

export default TextViz;