import React from 'react';
import { Container, Row, Col } from 'rebass';

class TotalsSection extends React.Component {
	render() {
		var { options, selected } = this.props;

		var keys = Object.keys(options);

		var total = keys.reduce((total, key) => {
			var selectedIndex = selected[key];
			var selectedOption = options[key].options[selectedIndex];
			return total + selectedOption.price;
		}, 0);

		return (
			<Container>
				<h2 className="h2 center">Order Total</h2>
				<h1 className="center">{'$' + total}</h1>
			</Container>
		);
	}
}

export default TotalsSection;