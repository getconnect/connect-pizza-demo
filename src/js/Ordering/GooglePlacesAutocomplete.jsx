import React from 'react';
import _ from 'underscore';

class GooglePlacesAutocomplete extends React.Component {

    componentDidMount() {
        var options = { types: ['geocode'] };
        var element = React.findDOMNode(this.refs.input);
        var autocomplete = new google.maps.places.Autocomplete(element, options);
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            var result = autocomplete.getPlace();
 
            var components = _(result.address_components).chain()
                .indexBy(c => c.types[0])
                .mapObject(c => c.long_name)
                .value();

            if (this.props.onAddressChanged) {
                this.props.onAddressChanged({
                    formatted: result.formatted_address,
                    components: components
                });
            }
        });
    }

    componentWillUnMount() {
        var element = React.findDOMNode(this.refs.autocomplete);
        google.maps.event.clearListeners(element, 'place_changed');
    }

    render() {
        return (
            <input {...this.props} ref="input" type="text" className={this.props.inputClassName} />
        );
    }
}



export default GooglePlacesAutocomplete;