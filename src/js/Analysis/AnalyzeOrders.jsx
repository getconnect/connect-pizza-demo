import React from 'react';
import UnitSales from './UnitSales.jsx';
import DollarSales from './DollarSales.jsx';
import SalesOverTime from './SalesOverTime.jsx';
import SalesByPeriod from './SalesByPeriod.jsx';
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
                        <SalesByPeriod></SalesByPeriod>
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
            </Container>
        );
    }
}

export default AnalyzeOrders;