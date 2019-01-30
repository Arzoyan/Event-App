import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMaps extends Component {

    render() {
        console.log('propssss', this.props)
        return (
            <Map google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: 40.154302,
                    lng: 44.527318,
                }}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 40.152053, lng:  44.496514 }} />
                <Marker />

            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA0byQAIFQhnMHsNUBco6Pv8bapWj1DMh0')
})(GoogleMaps);

//  <div>
//     <h1>{this.state.selectedPlace.name}</h1>
// </div> 

// {/* <InfoWindow onClose={this.onInfoWindowClose}>

// </InfoWindow> */}
//https://www.eventbriteapi.com/v3/events/search/?q={}token=Z44DOMHV3K56I4H3JBJ4&expand=venue