import React from 'react';

class HeaderLogo extends React.Component {
	render() {
		return (
			<div className="center mt4 mb4" onDoubleClick={ () => this.props.onPageChange() }>
				<img src="images/pizza-logo.png"></img>
			</div>
		);
	}
}

export default HeaderLogo;
