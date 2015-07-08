import React from 'react';
import { Container, Row, Col } from 'rebass';
import { pizzaOptions, deliveryOptions } from './Defaults.js';
import HeaderLogo from './HeaderLogo.jsx';
import OptionPicker from './OptionPicker.jsx';
import QuantityPicker from './QuantityPicker.jsx';
import TotalsSection from './TotalsSection.jsx';

class OrderForm extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = { 
    		selectedPizzaOptions: {
    			type: 0,
    			size: 0,
    			base: 0,
    			sauce: 0,
    			delivery: 0
    		},
    		selectedDeliveryOption: 0,
    		quantity: 1
    	};

    	this.onPizzaSelected = this.onItemSelected.bind(this, 'type');
    	this.onSizeSelected = this.onItemSelected.bind(this, 'size');
    	this.onBaseSelected = this.onItemSelected.bind(this, 'base');
    	this.onSauceSelected = this.onItemSelected.bind(this, 'sauce');
  	}

	render() {
		var { pizzaOptions, deliveryOptions } = this.props;
		var { selectedPizzaOptions, selectedDeliveryOption, quantity } = this.state;

		return (
			<Container>
				<HeaderLogo />
				<OptionPicker {...pizzaOptions.type} selected={selectedPizzaOptions.type} onItemSelected={this.onPizzaSelected} />
				<OptionPicker {...pizzaOptions.size} selected={selectedPizzaOptions.size} onItemSelected={this.onSizeSelected} />
				<OptionPicker {...pizzaOptions.base} selected={selectedPizzaOptions.base} onItemSelected={this.onBaseSelected} />
				<OptionPicker {...pizzaOptions.sauce} selected={selectedPizzaOptions.sauce} onItemSelected={this.onSauceSelected} />
				<QuantityPicker quantity={quantity} onQuantityUpdated={this.onQuantityUpdated.bind(this)} />
				<OptionPicker {...deliveryOptions} selected={selectedDeliveryOption} onItemSelected={this.onDeliverySelected.bind(this)} />
				<TotalsSection deliveryOptions={deliveryOptions} 
						selectedDeliveryOption={selectedDeliveryOption}
								  pizzaOptions={pizzaOptions} 
						  selectedPizzaOptions={selectedPizzaOptions} 
					   				  quantity={quantity} 
									placeOrder={this.placeOrder.bind(this)} />
			</Container>
		);
	}

	onItemSelected(sectionName, selectedIndex) {
		var state = this.state;
		state.selectedPizzaOptions[sectionName] = selectedIndex;
		this.setState(state);
	}

	onDeliverySelected(selectedIndex) {
		var state = this.state;
		state.selectedDeliveryOption = selectedIndex;
		this.setState(state);
	}

	onQuantityUpdated(quantity) {
		var state = this.state;
		state.quantity = quantity;
		this.setState(state);
	}

	placeOrder() {

	}

}
OrderForm.defaultProps = { 
	pizzaOptions: pizzaOptions,
	deliveryOptions: deliveryOptions
}

export default OrderForm;
