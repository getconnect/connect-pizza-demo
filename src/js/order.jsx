import React from 'react';
import { Button, Badge } from 'rebass';

class Order extends React.Component {
	render() {
		return (
			<div>
				<Button>Hello</Button>
				<Badge>World</Badge>
				<Button>Yes Please</Button>
			</div>
		);
	}
}

export default Order;