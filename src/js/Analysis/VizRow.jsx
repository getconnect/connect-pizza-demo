import React from 'react';
import { Row, Col } from 'rebass';

class VizRow extends React.Component {
    constructor(props) {
        super(props);      
    }

    render() {
        var children = this.props.children.map ? this.props.children : [this.props.children],
            mdSize = 12/children.length;

        return (
            <Row>
                {children.map((child) => {
                    return (
                        <Col sm={12} md={mdSize}>
                            <div className="mb4">
                                {child}
                            </div>
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default VizRow;