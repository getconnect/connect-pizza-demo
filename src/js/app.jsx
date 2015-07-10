import React from 'react';
import { Button } from 'rebass';
import { polyfill } from 'babelify';
import OrderForm from './Ordering/OrderForm.jsx';
import AnalyzeOrders from './Analysis/AnalyzeOrders.jsx';
import HeaderLogo from './Common/HeaderLogo.jsx';

class TogglePageButton extends React.Component {
    render() {
        var { onTogglePage, isAnalyzing } = this.props;
        return (
            <div className="absolute top-0 right-0 m1">
                <Button outline={true} onClick={onTogglePage}>
                    { isAnalyzing ? 'Ordering': 'Analytics' }
                </Button>
            </div>
        );
    }
}

class App extends React.Component {

    constructor() {
        super();
        this.state = { isAnalyzing: false };
        this.onTogglePage = this.onTogglePage.bind(this);
    }

    render() {
        var { isAnalyzing } = this.state;
        return (
            <div>
                <HeaderLogo />
                <TogglePageButton onTogglePage={this.onTogglePage.bind(this)} 
                                   isAnalyzing={isAnalyzing} />
                {isAnalyzing ? <AnalyzeOrders/> : <OrderForm/>}
            </div>
        );
    }

    onTogglePage() {
        this.setState({ isAnalyzing: !this.state.isAnalyzing });
    }
}

export default App;
