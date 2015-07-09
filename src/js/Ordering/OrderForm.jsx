import React from 'react';
import { Container, Row, Col } from 'rebass';
import Order from './Order.js';
import HeaderLogo from './HeaderLogo.jsx';
import OrderConfirmation from './OrderConfirmation.jsx';
import OptionPicker from './OptionPicker.jsx';
import QuantityPicker from './QuantityPicker.jsx';
import TotalsSection from './TotalsSection.jsx';

class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState();

        this.onPizzaSelected = this.onItemSelected.bind(this, 'type');
        this.onSizeSelected = this.onItemSelected.bind(this, 'size');
        this.onBaseSelected = this.onItemSelected.bind(this, 'base');
        this.onSauceSelected = this.onItemSelected.bind(this, 'sauce');
    }

    render() {
        var { order, orderPlaced } = this.state;
        var { pizzaOptions, 
              selectedPizzaOptions, 
              deliveryOptions, 
              selectedDeliveryOption, 
              quantity } = order;

        if (orderPlaced) {
            return <OrderConfirmation onOrderAgain={this.onOrderAgain.bind(this)} quantity={quantity} />
        }

        var total = order.calculateTotal();

        return (
            <Container>
                <HeaderLogo />
                <OptionPicker {...pizzaOptions.type} selected={selectedPizzaOptions.type} onItemSelected={this.onPizzaSelected} />
                <OptionPicker {...pizzaOptions.size} selected={selectedPizzaOptions.size} onItemSelected={this.onSizeSelected} />
                <OptionPicker {...pizzaOptions.base} selected={selectedPizzaOptions.base} onItemSelected={this.onBaseSelected} />
                <OptionPicker {...pizzaOptions.sauce} selected={selectedPizzaOptions.sauce} onItemSelected={this.onSauceSelected} />
                <QuantityPicker quantity={quantity} onQuantityUpdated={this.onQuantityUpdated.bind(this)} />
                <OptionPicker {...deliveryOptions} selected={selectedDeliveryOption} onItemSelected={this.onDeliverySelected.bind(this)} />
                <TotalsSection total={total} onPlaceOrder={this.onPlaceOrder.bind(this)} />
            </Container>
        );
    }

    initialState() {
        return  {
            order: new Order(),
            orderPlaced: false
        }
    }

    onItemSelected(sectionName, selectedIndex) {
        var state = this.state;
        state.order.selectedPizzaOptions[sectionName] = selectedIndex;
        this.setState(state);
    }

    onDeliverySelected(selectedIndex) {
        var state = this.state;
        state.order.selectedDeliveryOption = selectedIndex;
        this.setState(state);
    }

    onQuantityUpdated(quantity) {
        var state = this.state;
        state.order.quantity = quantity;
        this.setState(state);
    }

    onPlaceOrder() {
        var order = this.state.order;
        order.placeOrder().then(() => {
            var state = this.state;
            state.orderPlaced = true;
            this.setState(state);
        });
    }

    onOrderAgain() {
        this.setState(this.initialState());
    }

}

export default OrderForm;
