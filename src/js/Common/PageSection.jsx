import React from 'react';
import { Container } from 'rebass';

class PageSection extends React.Component {
    render() {
        return (
            <div className="center mt3 mb4">
                {this.props.children}
            </div>
        );
    }
}

export default PageSection;