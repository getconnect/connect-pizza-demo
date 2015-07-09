import React from 'react';
import PageSection from './PageSection.jsx';
import RibbonHeader from './RibbonHeader.jsx';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete.jsx';

class AddressPicker extends React.Component {
    render() {
        var inputStyle = { width: '16em' };
        return (
            <PageSection>
                <RibbonHeader>Address</RibbonHeader>
                <GooglePlacesAutocomplete style={inputStyle} inputClassName="field" />
            </PageSection>
        );
    }
}

export default AddressPicker;