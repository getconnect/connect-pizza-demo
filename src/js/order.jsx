import React from 'react';
import { Container, Row, Col } from 'rebass';

class OptionCell extends React.Component {
	render() {
		var { title, price, isExtra } = this.props;
		var prefix = isExtra ? '+$': '$';
		var formattedPrice = price == 0 ? 'No Charge' : prefix + price;
		return (
			<Col sm={6} md={4}>
				<div className="option-cell border rounded m1 flex flex-column flex-center flex-justify-center">
					<div className="center p2">
						<h3 className="h3">{title}</h3>
						<div className="mb1">{formattedPrice}</div>
					</div>
				</div>
			</Col>
		);
	}
}
OptionCell.propTypes = { 
	title: React.PropTypes.string,
	price: React.PropTypes.number,
	isExtra: React.PropTypes.bool
};


class OptionPicker extends React.Component {
	render() {
		var { options } = this.props;
		return (
			<Row>{
				options.map((option, index) => {
					if (index == 0) {

					}

					return <OptionCell key={index} {...option} isExtra={this.props.isExtra}/>;
				})
			}</Row>
		);
	}
}
OptionPicker.propTypes = { 
	options: React.PropTypes.array,
};


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
SectionHeader.propTypes = { 
	title: React.PropTypes.string,
};


class Section extends React.Component {
	render() {
		return (
			<div className="mt2">
  				<SectionHeader {...this.props}/>
				<OptionPicker {...this.props}/>
			</div>
		);
	}
}

class Order extends React.Component {

	render() {
		var { options } = this.props;
		return (
			<Container>
				<Section {...options.pizzaType} />
				<Section {...options.size} />
				<Section {...options.base} />
				<Section {...options.sauce} />
				<Section {...options.delivery} />
			</Container>
		);
	}
}
Order.defaultProps = { 
	options: {
		pizzaType: {
			title: 'Choose a pizza',
			isExtra: false,
			options: [
				{ title: 'Supreme', price: 10, imageUrl: '' },
				{ title: 'Cheese', price: 10, imageUrl: '' },
				{ title: 'Hawaiian', price: 10, imageUrl: '' },
				{ title: 'Pepperoni', price: 10, imageUrl: '' },
				{ title: 'Mexicana', price: 10, imageUrl: '' },
				{ title: 'Vege', price: 10, imageUrl: '' }
			]
		},
		size: {
			title: 'Choose a size',
			isExtra: true,
			options: [
				{ title: 'Regular', price: 0, imageUrl: '' },
				{ title: 'Large', price: 4, imageUrl: '' },
				{ title: 'Extra Large', price: 7, imageUrl: '' }
			]
		},
		base: {
			title: 'Choose a base',
			isExtra: true,
			options: [
				{ title: 'Regular Crust', price: 0, imageUrl: null },
				{ title: 'Cheesy Crust', price: 3, imageUrl: null },
				{ title: 'Gluten Free', price: 4, imageUrl: null }
			]
		},
		sauce: {
			title: 'Choose a sauce',
			isExtra: true,
			options: [
				{ title: 'Tomato', price: 0, imageUrl: null },
				{ title: 'Barbeque', price: 0, imageUrl: null },
				{ title: 'Spicy Habanero', price: 0, imageUrl: null }
			]
		},
		qty: {
			title: 'Quantity',
			defaultValue: 1 
		},
		delivery: {
			title: 'Pickup or delivery?',
			isExtra: true,
			options: [
				{ title: 'Pickup', price: 0, imageUrl: null },
				{ title: 'Delivery', price: 1, imageUrl: null }
			]
		},
		address: {
			title: 'Your address'
		}
	}
}

export default Order;