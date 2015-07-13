import React from 'react';

class HeaderLogo extends React.Component {
    render() {
        return (
            <div className="center mb4">
                <button className="btn btn-outline gray" onClick={ () => this.props.onPageChanged() }>
                    <span className={this.props.iconName} />
                    <span className="ml1">{this.props.text}</span>
                </button>
            </div>
        );
    }
}

export default HeaderLogo;