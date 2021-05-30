import { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <div style={{ width: '100%', marginTop: -30 }}>
        <Map
          google={this.props.google}
          containerStyle={{
            display: 'flex',
            flex: 1,
            // width: '700px'
            height: '500px',
            // position: 's',
            position: 'relative',
          }}
          zoom={14}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>hi {/* <h1>{this.state.selectedPlace.Gujrat}</h1> */}</div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVNVoce6nkbkgbbF7YHH0-YMj6xgQw5lA',
})(MapContainer);
