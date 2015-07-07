import React from 'react';
import Order from './Ordering/Order.jsx';
import Analyze from './Analysis/Analyze.jsx';

class App extends React.Component {

	constructor() {
    	super();

    	this.state = {
    		isAnalyzing: false
    	};
  	}

	render() {
		var showAnalyzingPage = this.state.isAnalyzing;
		return showAnalyzingPage ? <Analyze togglePage={this.togglePage} /> : <Order togglePage={this.togglePage} />;
	}

	togglePage() {
		this.setState({ isAnalyzing: !this.state.isAnalyzing });
	}
}

export default App;
