import React from 'react';
import { Container, Button } from 'rebass';
import Numeral from 'numeral';
import RibbonHeader from './RibbonHeader.jsx';

class TotalsSection extends React.Component {
	render() {
		var { options, selected } = this.props;

		var keys = Object.keys(options);

		var total = keys.reduce((total, key) => {
			var selectedIndex = selected[key];
			var selectedOption = options[key].options[selectedIndex];
			return total + selectedOption.price;
		}, 0);

		var formattedTotal = Numeral(total).format('$0,0.00');

		return (
			<Container>
				<div className="center mb4">
					<RibbonHeader title={"Order Total"}/>
					<h1 className="center mt3 mb3">{formattedTotal}</h1>
					<Button color="black">Place Order</Button>
				</div>
			</Container>
		);
	}
}

export default TotalsSection;