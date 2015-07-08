import React from 'react';
import { Container, Button } from 'rebass';
import Numeral from 'numeral';
import RibbonHeader from './RibbonHeader.jsx';

class TotalsSection extends React.Component {
	render() {
		var { deliveryOptions, 
			  selectedDeliveryOption, 
			  pizzaOptions, 
			  selectedPizzaOptions, 
			  quantity
			} = this.props;

		var total = Object.keys(pizzaOptions).reduce((total, option) => {
			var selectedIndex = selectedPizzaOptions[option];
			var selectedOption = pizzaOptions[option].options[selectedIndex];
			return total + selectedOption.price;
		}, 0);

		total *= Math.max(quantity, 1);

		total += deliveryOptions.options[selectedDeliveryOption].price;

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
TotalsSection.propTypes = {
	deliveryOptions: React.PropTypes.object.isRequired,
	selectedDeliveryOption: React.PropTypes.number.isRequired,
	pizzaOptions: React.PropTypes.object.isRequired,
	selectedPizzaOptions: React.PropTypes.object.isRequired,
	quantity: React.PropTypes.number.isRequired
}

export default TotalsSection;