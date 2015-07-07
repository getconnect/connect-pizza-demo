
var OrderOptions = {
	pizzaType: {
		title: 'Choose a pizza',
		isExtra: false,
		options: [
			{ title: 'Supreme', price: 10, imageUrl: 'images/supreme.png'},
			{ title: 'Cheese', price: 10, imageUrl: 'images/cheese.png'},
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
	},
	delivery: {
		title: 'Pickup or delivery?',
		isExtra: true,
		options: [
			{ title: 'Pickup', price: 0, imageUrl: 'images/pickup.png' },
			{ title: 'Delivery', price: 1, imageUrl: 'images/delivery.png' }
		]
	}
};

export { OrderOptions }