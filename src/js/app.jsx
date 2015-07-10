import React from 'react';
import { polyfill } from 'babelify';
import OrderForm from './Ordering/OrderForm.jsx';
import AnalyzeOrders from './Analysis/AnalyzeOrders.jsx';

class App extends React.Component {

    constructor() {
        super();

        this.state = { isAnalyzing: false };
    }

    render() {
        var showAnalyzingPage = this.state.isAnalyzing;
        return showAnalyzingPage ?
            <AnalyzeOrders onTogglePage={this.onTogglePage.bind(this)} /> :
            <OrderForm onTogglePage={this.onTogglePage.bind(this)} />;
    }

    onTogglePage() {
        this.setState({ isAnalyzing: !this.state.isAnalyzing });
    }
}

export default App;
