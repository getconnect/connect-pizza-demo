import React from 'react';
import { Container, Row, Col } from 'rebass';

class TotalsSection extends React.Component {
	render() {

		console.log(Object.keys(this.props.options));


		return (
			<Container>
				<h2 className="h2 center">Order Total</h2>
			</Container>
		);
	}
}

export default TotalsSection;