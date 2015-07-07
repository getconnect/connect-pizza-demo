import React from 'react';
import { Container, Row, Col } from 'rebass';
import { OrderOptions } from './Defaults.js';
import OptionPicker from './OptionPicker.jsx';

class SectionHeader extends React.Component {
	render() {
		return (
			<Row>
				<Col sm={12}>
					<h2 className="h2 center">{this.props.title}</h2>
	  			</Col>
  			</Row>
		);
	}
}

class Section extends React.Component {
	render() {
		return (
			<div className="mt2 mb4">
  				<SectionHeader {...this.props}/>
				<OptionPicker {...this.props}/>
			</div>
		);
	}
}

class Order extends React.Component {

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
  	}

	render() {
		var { options } = this.props;
		var { selected } = this.state;

		return (
			<Container>
				<Section {...options.pizzaType} selected={selected.pizzaType} onItemSelected={this.onPizzaSelected} />
				<Section {...options.size} selected={selected.size} onItemSelected={this.onSizeSelected} />
				<Section {...options.base} selected={selected.base} onItemSelected={this.onBaseSelected} />
				<Section {...options.sauce} selected={selected.sauce} onItemSelected={this.onSauceSelected} />
				<Section {...options.delivery} selected={selected.delivery} onItemSelected={this.onDeliverySelected} />
			</Container>
		);
	}

	onItemSelected(sectionName, selectedIndex) {
		var state = this.state;
		state.selected[sectionName] = selectedIndex;
		this.setState(state);
	}
}
Order.defaultProps = { options: OrderOptions }

export default Order;
