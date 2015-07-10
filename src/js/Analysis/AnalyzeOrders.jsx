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

        let interval = this.bestIntervalFor(timeframe);

        return (
            <Container>
                <TimeframeFilter timeframe={timeframe} onTimeframeChanged={this.onTimeframeChanged.bind(this)} />
                <PageSection>
                    <Row>
                        <Col md={6}><UnitSales timeframe={timeframe}/></Col>
                        <Col md={6}><DollarSales timeframe={timeframe}/></Col>
                    </Row>
                </PageSection>
                <PageSection>
                    <SalesOverTime timeframe={timeframe} interval={interval} />
                </PageSection>
                <PageSection>
                    <SalesByWindow timeframe={timeframe} />
                </PageSection>
                <PageSection>
                    <SalesByDay timeframe={timeframe} />
                </PageSection>
                <PageSection>
                    <UnitsByType timeframe={timeframe} />
                </PageSection>
                <PageSection>
                    <OrdersBySuburb timeframe={timeframe} />
                </PageSection>
            </Container>
        );
    }

    onTimeframeChanged(newTimeframe) {
        this.setState({ timeframe: newTimeframe});
    }

    bestIntervalFor(timeframe) {
        switch (timeframe) {
            case 'today':
            case 'yesterday':
                return 'hourly';
            default:
                return 'daily';
        }
    }
}

export default AnalyzeOrders;
