import React from 'react';
import { Container } from 'rebass';

class PageSection extends React.Component {
    render() {
        return (
            <Container>
                <div className="center mt3 mb4">
                    {this.props.children}
                </div>
            </Container>
        );
    }
}

export default PageSection;