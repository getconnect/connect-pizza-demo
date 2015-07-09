import React from 'react';

class RibbonHeader extends React.Component {
	render() {
 		var headerStyle = { 
			backgroundImage: 'url(images/ribbon.png)',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};
		return (
			<h2 className="h2 center p3" style={headerStyle}>
				{this.props.children}
			</h2>
		);
	}
}

export default RibbonHeader;