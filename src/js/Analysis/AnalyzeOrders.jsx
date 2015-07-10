import React from 'react';
import { Container, Row, Col } from 'rebass';
import UnitSales from './UnitSales.jsx';
import DollarSales from './DollarSales.jsx';
import SalesOverTime from './SalesOverTime.jsx';
import SalesByWindow from './SalesByWindow.jsx';
import SalesByDay from './SalesByDay.jsx';
import UnitsByType from './UnitsByType.jsx';
import OrdersBySuburb from './OrdersBySuburb.jsx';
import VizRow from './VizRow.jsx';
import PageSection from '../Common/PageSection.jsx';
import TimeframeFilter from './TimeframeFilter.jsx';

class AnalyzeOrders extends React.Component {
    constructor(props) {
        super(props);      

        this.state = {
            timeframe: 'this_week'
        };
    }

    render() {
        let { timeframe } = this.state;
        return (
            <Container>
                <TimeframeFilter timeframe={timeframe} onTimeframeChanged={this.onTimeframeChanged.bind(this)} />
                <Row>
                    <Col md={6}><UnitSales timeframe={timeframe}/></Col>
                    <Col md={6}><DollarSales timeframe={timeframe}/></Col>
                </Row>
                <PageSection>
                    <SalesOverTime timeframe={timeframe}/>
                </PageSection>
                <PageSection>
                    <SalesByWindow timeframe={timeframe}/>
                </PageSection>
                <PageSection>
                    <SalesByDay timeframe={timeframe}/>
                </PageSection>
                <PageSection>
                    <UnitsByType timeframe={timeframe}/>
                </PageSection>
                <PageSection>
                    <OrdersBySuburb timeframe={timeframe}/>
                </PageSection>
            </Container>
        );
    }

    onTimeframeChanged(newTimeframe) {
        this.setState({ timeframe: newTimeframe});
    }
}

export default AnalyzeOrders;
