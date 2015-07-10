import React from 'react';
import { Container, Button } from 'rebass';
import RibbonHeader from '../Common/RibbonHeader.jsx';

class OrderConfirmation extends React.Component {
	render() {
		var { onOrderAgain, quantity } = this.props;
		var label = `Your pizza${quantity > 1 ? 's' : ''} will be ready shortly!`;
		return (
			<Container>
				<div className="center mb4">
					<RibbonHeader>Bellissimo!</RibbonHeader>
					<h1 className="center mt3 mb3">{label}</h1>
					<Button color="black" onClick={onOrderAgain}>Order more</Button>
				</div>
			</Container>
		);
	}
}
OrderConfirmation.propTypes = {
	onOrderAgain: React.PropTypes.func.isRequired,
	quantity: React.PropTypes.number.isRequired
}

export default OrderConfirmation;