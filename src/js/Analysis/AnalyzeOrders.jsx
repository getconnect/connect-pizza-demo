import React from 'react';
import HeaderLogo from '../Common/HeaderLogo.jsx';
import UnitSales from './UnitSales.jsx';
import DollarSales from './DollarSales.jsx';
import SalesOverTime from './SalesOverTime.jsx';
import SalesByWindow from './SalesByWindow.jsx';
import SalesByDay from './SalesByDay.jsx';
import UnitsByType from './UnitsByType.jsx';
import OrdersBySuburb from './OrdersBySuburb.jsx';
import { Container, Row, Col } from 'rebass';

class AnalyzeOrders extends React.Component {
    constructor(props) {
        super(props);      
    }

    render() {
        return (
            <Container>
                <HeaderLogo />
                <Row>
                    <Col sm={12} md={6}>
                        <UnitSales></UnitSales>
                    </Col>
                    <Col sm={12} md={6}>
                        <DollarSales></DollarSales>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <SalesOverTime></SalesOverTime>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <SalesByWindow></SalesByWindow>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <SalesByDay></SalesByDay>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <UnitsByType></UnitsByType>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <OrdersBySuburb></OrdersBySuburb>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AnalyzeOrders;