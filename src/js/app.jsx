import React from 'react';
import { Button } from 'rebass';
import { polyfill } from 'babelify';
import OrderForm from './Ordering/OrderForm.jsx';
import AnalyzeOrders from './Analysis/AnalyzeOrders.jsx';

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
                {isAnalyzing ? 
                    <AnalyzeOrders onPageChanged={() => this.onTogglePage(false)}/> : 
                    <OrderForm onPageChanged={() => this.onTogglePage(true)}/>
                }
            </div>
        );
    }

    onTogglePage(isAnalyzing) {
        this.setState({ isAnalyzing: isAnalyzing });
    }
}

export default App;
