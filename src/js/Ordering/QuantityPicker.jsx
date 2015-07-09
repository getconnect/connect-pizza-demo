import React from 'react';
import { Container } from 'rebass';
import RibbonHeader from './RibbonHeader.jsx';

class QuantityPicker extends React.Component {

	render() {
		var { quantity, onQuantityUpdated } = this.props;

		var inputStyle = { width: '8em' };

		return (
			<Container>
				<div className="center mt3 mb4">
					<RibbonHeader>Quantity</RibbonHeader>
					<input type="number" className='field center' 
											   min="1" 
											   max={this.props.maxQuantity} 
											 value={quantity} 
											 style={inputStyle} 
										  onChange={this.handleChange.bind(this)} />
				</div>
			</Container>
		);
	}

	handleChange(event) {
		var qty = parseInt(event.target.value);
		qty = isNaN(qty) ? 1: qty;
		qty = Math.max(Math.min(qty, this.props.maxQuantity), 1);
		this.props.onQuantityUpdated(qty);
	}
}
QuantityPicker.defaultProps = {
	maxQuantity: 50
}
QuantityPicker.propTypes = {
	quantity: React.PropTypes.number.isRequired,
	onQuantityUpdated: React.PropTypes.func.isRequired
}

export default QuantityPicker;
