import React from 'react';
import OrderForm from './Ordering/OrderForm.jsx';
import AnalyzeOrders from './Analysis/AnalyzeOrders.jsx';
import { polyfill } from 'babelify';

class App extends React.Component {

	constructor() {
    	super();

    	this.state = {
    		isAnalyzing: false
    	};
  	}

	render() {
		var showAnalyzingPage = this.state.isAnalyzing;
		return showAnalyzingPage ? <AnalyzeOrders togglePage={this.togglePage} /> : <OrderForm togglePage={this.togglePage} />;
	}

	togglePage() {
		this.setState({ isAnalyzing: !this.state.isAnalyzing });
	}
}

export default App;
