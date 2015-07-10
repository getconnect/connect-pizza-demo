import React from 'react';
import UnitSales from './UnitSales.jsx';
import DollarSales from './DollarSales.jsx';
import SalesOverTime from './SalesOverTime.jsx';
import SalesByWindow from './SalesByWindow.jsx';
import SalesByDay from './SalesByDay.jsx';
import UnitsByType from './UnitsByType.jsx';
import OrdersBySuburb from './OrdersBySuburb.jsx';
import VizRow from './VizRow.jsx';
import { Container, Row, Col } from 'rebass';

class AnalyzeOrders extends React.Component {
    constructor(props) {
        super(props);      
    }

    render() {
        return (
            <Container>
                <VizRow>
                    <UnitSales></UnitSales>
                    <DollarSales></DollarSales>
                </VizRow>
                <VizRow>
                    <SalesOverTime></SalesOverTime>
                </VizRow>
                <VizRow>
                    <SalesByWindow></SalesByWindow>
                </VizRow>
                <VizRow>
                    <SalesByDay></SalesByDay>
                </VizRow>
                <VizRow>
                    <UnitsByType></UnitsByType>
                </VizRow>
                <VizRow>
                    <OrdersBySuburb></OrdersBySuburb>
                </VizRow>
            </Container>
        );
    }
}

export default AnalyzeOrders;