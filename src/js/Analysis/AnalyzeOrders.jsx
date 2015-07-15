import React from 'react';
import { Container, Row, Col } from 'rebass';
import UnitSales from './UnitSales.jsx';
import DollarSales from './DollarSales.jsx';
import SalesOverTime from './SalesOverTime.jsx';
import PickupSales from './PickupSales.jsx';
import DeliverySales from './DeliverySales.jsx';
import SalesByWindow from './SalesByWindow.jsx';
import SalesByDay from './SalesByDay.jsx';
import OrdersBySuburb from './OrdersBySuburb.jsx';
import FavouritePizzaType from './FavouritePizzaType.jsx';
import VizRow from './VizRow.jsx';
import PageSection from '../Common/PageSection.jsx';
import TimeframeFilter from './TimeframeFilter.jsx';
import HeaderTitle from '../common/HeaderTitle.jsx';
import ViewChanger from '../common/ViewChanger.jsx';

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
            <div>
                <HeaderTitle title="">
                    <TimeframeFilter timeframe={timeframe} onTimeframeChanged={(newTimeframe) => this.onTimeframeChanged(newTimeframe)}/>
                </HeaderTitle>
                <Container>
                    <PageSection>
                        <Row>
                            <Col md={6}><UnitSales timeframe={timeframe}/></Col>
                            <Col md={6}><DollarSales timeframe={timeframe}/></Col>
                        </Row>
                    </PageSection>
                    <PageSection>
                        <Row>
                            <Col md={6}><PickupSales timeframe={timeframe} /></Col>
                            <Col md={6}><DeliverySales timeframe={timeframe} /></Col>
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
                        <OrdersBySuburb timeframe={timeframe} />
                    </PageSection>
                    <ViewChanger iconName="ion-pizza" text="Order Pizza" onPageChanged={ () => this.props.onPageChanged() } />
                </Container>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
