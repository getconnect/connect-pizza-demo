import React from 'react';
import { Container, Row, Col } from 'rebass';
import { OrderOptions } from './Defaults.js';
import OptionPicker from './OptionPicker.jsx';
import TotalsSection from './TotalsSection.jsx';

class OrderForm extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = { 
    		selected: {
    			pizzaType: 0,
    			size: 0,
    			base: 0,
    			sauce: 0,
    			delivery: 0
    		}
    	};

    	this.onPizzaSelected = this.onItemSelected.bind(this, 'pizzaType');
    	this.onSizeSelected = this.onItemSelected.bind(this, 'size');
    	this.onBaseSelected = this.onItemSelected.bind(this, 'base');
    	this.onSauceSelected = this.onItemSelected.bind(this, 'sauce');
    	this.onDeliverySelected = this.onItemSelected.bind(this, 'delivery');
    	this.placeOrder = this.placeOrder.bind(this);
  	}

	render() {
		var { options } = this.props;
		var { selected } = this.state;

		return (
			<Container>
				<OptionPicker {...options.pizzaType} selected={selected.pizzaType} onItemSelected={this.onPizzaSelected} />
				<OptionPicker {...options.size} selected={selected.size} onItemSelected={this.onSizeSelected} />
				<OptionPicker {...options.base} selected={selected.base} onItemSelected={this.onBaseSelected} />
				<OptionPicker {...options.sauce} selected={selected.sauce} onItemSelected={this.onSauceSelected} />
				<OptionPicker {...options.delivery} selected={selected.delivery} onItemSelected={this.onDeliverySelected} />
				<TotalsSection options={options} selected={selected} placeOrder={this.placeOrder} />
			</Container>
		);
	}

	onItemSelected(sectionName, selectedIndex) {
		var state = this.state;
		state.selected[sectionName] = selectedIndex;
		this.setState(state);
	}


	placeOrder() {

	}

}
OrderForm.defaultProps = { options: OrderOptions }

export default OrderForm;
