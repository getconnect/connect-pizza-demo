import React from 'react';
import { Container, Button } from 'rebass';
import Numeral from 'numeral';
import PageSection from '../Common/PageSection.jsx';
import RibbonHeader from '../Common/RibbonHeader.jsx';

class TotalsSection extends React.Component {
    render() {
        var { total, onPlaceOrder } = this.props;
        var formattedTotal = Numeral(total).format('$0,0.00');
        return (
            <PageSection>
                <RibbonHeader>Order Total</RibbonHeader>
                <h1 className="center mt3 mb3">{formattedTotal}</h1>
                <Button color="black" onClick={onPlaceOrder}>Place Order</Button>
            </PageSection>
        );
    }
}
TotalsSection.propTypes = {
    total: React.PropTypes.number.isRequired,
    onPlaceOrder: React.PropTypes.func.isRequired
}

export default TotalsSection;