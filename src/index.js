import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
//import {request, PERMISSIONS} from 'react-native-permissions';

export default class App extends Component {
  /*
  componentDidMount() {
    this.requestLocatePermission();
  }
  requestLocatePermission = async () => {
    if (Platform.OS === 'ios') {
      const response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone:' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      console.log('Nao deu permissao');
    }
  };

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition((position) => {
      console.log(JSON.stringify(position));
    });
  };
*/
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: -5.2084491,
          longitude: -39.2894836,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%',
  },
});
