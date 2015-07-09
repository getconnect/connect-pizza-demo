import React from 'react';
import PageSection from '../Common/PageSection.jsx';
import RibbonHeader from '../Common/RibbonHeader.jsx';
import GooglePlacesAutocomplete from '../Common/GooglePlacesAutocomplete.jsx';

class AddressPicker extends React.Component {
    render() {
        var inputStyle = { width: '100%' };
        return (
            <PageSection>
                <RibbonHeader>Address</RibbonHeader>
                <GooglePlacesAutocomplete style={inputStyle} 
                                    placeholder="Enter your address" 
                                 inputClassName="field center"
                                 onAddressChanged={this.props.onAddressChanged} />
            </PageSection>
        );
    }
}
AddressPicker.propTypes = {
    onAddressChanged: React.PropTypes.func
}

export default AddressPicker;