import React from 'react';
import { Container, Row, Col } from 'rebass';
import Order from './Order.js';
import HeaderLogo from '../Common/HeaderLogo.jsx';
import OrderConfirmation from './OrderConfirmation.jsx';
import OptionPicker from './OptionPicker.jsx';
import QuantityPicker from './QuantityPicker.jsx';
import AddressPicker from './AddressPicker.jsx';
import TotalsSection from './TotalsSection.jsx';
import ViewChanger from '../common/ViewChanger.jsx';

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
        var { order, orderPlaced, isPlacingOrder } = this.state;
        var { pizzaOptions, 
              selectedPizzaOptions, 
              deliveryOptions, 
              selectedDeliveryOption, 
              quantity } = order;

        if (orderPlaced) {
            return <OrderConfirmation onOrderAgain={this.onOrderAgain.bind(this)} quantity={quantity} />
        }

        var totalPrice = order.getTotalPrice();

        return (
            <Container>
                <HeaderLogo />
                <OptionPicker {...pizzaOptions.type} selected={selectedPizzaOptions.type} onItemSelected={this.onPizzaSelected} />
                <OptionPicker {...pizzaOptions.size} selected={selectedPizzaOptions.size} onItemSelected={this.onSizeSelected} />
                <OptionPicker {...pizzaOptions.base} selected={selectedPizzaOptions.base} onItemSelected={this.onBaseSelected} />
                <OptionPicker {...pizzaOptions.sauce} selected={selectedPizzaOptions.sauce} onItemSelected={this.onSauceSelected} />
                <QuantityPicker quantity={quantity} onQuantityUpdated={this.onQuantityUpdated.bind(this)} />
                <OptionPicker {...deliveryOptions} selected={selectedDeliveryOption} onItemSelected={this.onDeliverySelected.bind(this)} />
                <AddressPicker onAddressChanged={this.onAddressChanged.bind(this)} />
                <TotalsSection total={totalPrice} isPlacingOrder={isPlacingOrder} onPlaceOrder={this.onPlaceOrder.bind(this)} />                
                <hr className="mb4"/>
                <ViewChanger iconName="ion-connection-bars" text="View Analytics" onPageChanged={ () => this.props.onPageChanged() } />
            </Container>
        );
    }

    componentDidMount() {        
        window.scrollTo(0, 0);
    }

    initialState() {
        return  {
            order: new Order(),
            orderPlaced: false,
            isPlacingOrder: false
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

    onAddressChanged(address) {
        var state = this.state;
        state.order.address = address;
        this.setState(state);
    }

    onPlaceOrder() {
        var state = this.state;
        state.isPlacingOrder = true;
        this.setState(state);

        this.state.order.placeOrder().then(() => {
            var state = this.state;
            state.orderPlaced = true;
            state.isPlacingOrder = false;
            this.setState(state);
        });
    }

    onOrderAgain() {
        this.setState(this.initialState());
    }

}

export default OrderForm;
