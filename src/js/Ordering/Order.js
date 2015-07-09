import Connect from 'connect-js-viz';

var connect = new Connect({
	apiKey: "this.is-a;nice'key",
	projectId: "project.id-is;not'bad"
});

class Order {

	constructor() {
		this.pizzaOptions = this.getPizzaOptions();
		this.selectedPizzaOptions = {
    		type: 0,
    		size: 0,
    		base: 0,
    		sauce: 0,
    		delivery: 0
    	};

    	this.deliveryOptions = this.getDeliveryOptions();
    	this.selectedDeliveryOption = 0;

    	this.quantity = 1;
	}

	placeOrder() {
		return connect.push({
			yay: 'an event'
		});
	}

	calculateTotal() {
		var total = Object.keys(this.pizzaOptions).reduce((total, option) => {
			var selectedIndex = this.selectedPizzaOptions[option];
			var selectedOption = this.pizzaOptions[option].options[selectedIndex];
			return total + selectedOption.price;
		}, 0);
		total *= Math.max(this.quantity, 1);
		total += this.deliveryOptions.options[this.selectedDeliveryOption].price;
		return total;
	}

	getPizzaOptions() {
		return {
			type: {
				title: 'Choose a pizza',
				isExtra: false,
				options: [
					{ title: 'Supreme', price: 10, imageUrl: 'images/supreme.png'},
					{ title: 'Cheese', price: 8, imageUrl: 'images/cheese.png'},
					{ title: 'Hawaiian', price: 10, imageUrl: 'images/hawaiian.png' },
					{ title: 'Pepperoni', price: 10, imageUrl: 'images/pepperoni.png' },
					{ title: 'Mexicana', price: 10, imageUrl: 'images/mexicana.png' },
					{ title: 'Vege', price: 10, imageUrl: 'images/vege.png' }
				]
			},
			size: {
				title: 'Choose a size',
				isExtra: true,
				options: [
					{ title: 'Regular', price: 0, imageUrl: 'images/regular.png' },
					{ title: 'Large', price: 4, imageUrl: 'images/large.png' },
					{ title: 'Extra Large', price: 7, imageUrl: 'images/extra-large.png' }
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
			}
		};
	}

	getDeliveryOptions() {
		return {
			title: 'Pickup or delivery?',
			isExtra: true,
			options: [
				{ title: 'Pickup', price: 0, imageUrl: 'images/pickup.png' },
				{ title: 'Delivery', price: 4, imageUrl: 'images/delivery.png' }
			]
		};
	}
}

export default Order;
