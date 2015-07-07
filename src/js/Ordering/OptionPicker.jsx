import React from 'react';
import classNames from 'classnames';
import { Row, Col } from 'rebass';

class OptionCellInner extends React.Component {
	render() {
		var { title, price, imageUrl, isExtra, isSelected } = this.props;

		var prefix = isExtra ? '+$': '$';
		var formattedPrice = price == 0 ? 'No Charge' : prefix + price;

		return (
			<div className="center p2">
				<img className="mt1" src={imageUrl}></img>
				<h3 className="h3 mt0 mb0">{title}</h3>
				<div className="mb1 gray">{formattedPrice}</div>
			</div>
		);
	}
}

class OptionCell extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isHovering: false }

		this.hoverBegan = this.hoverBegan.bind(this);
		this.hoverEnded = this.hoverEnded.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
	}

	render() {
		var { isSelected } = this.props;
		var isFaded = !isSelected && !this.state.isHovering;

  		var cellClasses = classNames(
  			'option-cell', 'rounded', 'm1', 'pointer', 'relative', 'flex', 'flex-column', 'flex-center', 'flex-justify-center',
  			{ 'faded': isFaded }, 
  			{ 'border': isSelected }, 
  			{ 'transparent-border': !isSelected }
  		);

  		var selectedTick = isSelected ? <div className="absolute top-0 right-0 m1">✓</div> : null;

		return (
			<Col sm={6} md={4}>
				<div className={cellClasses} onMouseEnter={this.hoverBegan} 
											 onMouseLeave={this.hoverEnded} 
											      onClick={this.handleSelection}>
					{selectedTick}
					<OptionCellInner {...this.props}/>
				</div>
			</Col>
		);
	}

	hoverBegan() {
		this.setState({ isHovering: true });
	}
	hoverEnded() {
		this.setState({ isHovering: false });
	}

	handleSelection() {
		this.props.onItemSelected(this.props.index);
	}
}


class OptionPicker extends React.Component {
	render() {
		var { options, selected } = this.props;
		return (
			<Row>{
				options.map((option, index) => {
					return <OptionCell {...option} key={index} 
												 index={index}
											   isExtra={this.props.isExtra}
									 	onItemSelected={this.props.onItemSelected}
							 				isSelected={index === selected} />;
				})
			}</Row>
		);
	}
}

export default OptionPicker;
