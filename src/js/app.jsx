import React from 'react';
import Order from './order.jsx';
import Analyze from './analyze.jsx';

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