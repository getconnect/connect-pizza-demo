import React from 'react';

class RibbonHeader extends React.Component {
	render() {
		var { title } = this.props;
 		var headerStyle = { 
			backgroundImage: 'url(images/ribbon.png)',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};
		return (
			<h2 className="h2 center p3" style={headerStyle}>{title}</h2>
		);
	}
}
RibbonHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default RibbonHeader;