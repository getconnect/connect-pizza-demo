import React from 'react';

class HeaderTitle extends React.Component {
    render() {
        var imageStyle = {
                height: '100px'
            };

        return (
            <div className="flex flex-center m2 mb4">
                <img src="images/pizza-logo.png" className="flex-none" style={imageStyle} onDoubleClick={ () => this.props.onPageChange() }></img>
                <h2 className="flex-auto center m0">{this.props.title}</h2>
                <div className="inline-block flex-none">{this.props.children}</div>                
            </div>
        );
    }
}

export default HeaderTitle;
