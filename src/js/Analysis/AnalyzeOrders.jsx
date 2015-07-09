import React from 'react';
import UnitSales from './UnitSales.jsx';
import DollarSales from './DollarSales.jsx';
import SalesOverTime from './SalesOverTime.jsx';
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
            </Container>
        );
    }
}

export default AnalyzeOrders;