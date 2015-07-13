import connect from '../connect.js';
import * as denormalise from './denormalise.js';

class Order {

    constructor() {
        this.pizzaOptions = Order.getPizzaOptions();
        this.selectedPizzaOptions = {
            type: 0,
            size: 0,
            base: 0,
            sauce: 0,
            delivery: 0
        };

        this.deliveryOptions = Order.getDeliveryOptions();
        this.selectedDeliveryOption = 0;

        this.address = {};

        this.quantity = 1;
    }

    placeOrder() {

        var pizzaOptions = Object.keys(this.pizzaOptions).reduce((result, option) => {
            var selectedIndex = this.selectedPizzaOptions[option];
            var selectedOption = this.pizzaOptions[option].options[selectedIndex];

            result[option] = {
                id: selectedIndex,
                value: selectedOption.title,
                price: selectedOption.price
            }

            return result;
        }, {});

        var pizzaOrderEvent = {
            time: denormalise.dateTime(),
            quantity: this.quantity,
            pizza: pizzaOptions,
            address: this.address,
            isDelivery: this.isDelivery(),
            deliveryType: this.getDeliveryType(),
            deliveryPrice: this.getDeliveryPrice(),
            unitPrice: this.getUnitPrice(),
            totalPrice: this.getTotalPrice()
        };

        return connect.push('orders', pizzaOrderEvent);
    }

    isDelivery() { return this.selectedDeliveryOption != 0 };

    getUnitPrice() {
        return Object.keys(this.pizzaOptions).reduce((total, option) => {
            var selectedIndex = this.selectedPizzaOptions[option];
            var selectedOption = this.pizzaOptions[option].options[selectedIndex];
            return total + selectedOption.price;
        }, 0);
    }

    getDeliveryType() {
        return this.deliveryOptions.options[this.selectedDeliveryOption].title;
    }

    getDeliveryPrice() {
        return this.deliveryOptions.options[this.selectedDeliveryOption].price;
    }

    getTotalPrice() {
        var unitPrice = this.getUnitPrice();
        var totalPrice = unitPrice * Math.max(this.quantity, 1);
        return totalPrice + this.getDeliveryPrice();
    }

    static getPizzaOptions() {
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

    static getDeliveryOptions() {
        return {
            title: 'Pickup or delivery?',
            isExtra: true,
            options: [
                { title: 'Pickup', price: 0, imageUrl: 'images/pickup.png' },
                { title: 'Delivery', price: 4, imageUrl: 'images/delivery.png' },
                { title: 'Express Drone', price: 30, imageUrl: 'images/drone.png' }
            ]
        };
    }
}

export default Order;
