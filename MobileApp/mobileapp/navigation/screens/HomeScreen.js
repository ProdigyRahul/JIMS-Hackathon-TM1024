import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Dimensions,Button, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import* as Location from 'expo-location';

const Home = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const onRegionChange = (region) => {
    console.log(region);
  }

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({enableHighAccurancy: true});
    
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
    console.log(location.coords.latitude, location.coords.longitude);
  }

  useEffect(() => {
    userLocation();
  },[]);
  return ( 
    <View style={styles.container}>
      {/* <View style={{zIndex: 1}}>
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDuzhlBlyV5ES8dgcOwQL2X6tlC0cFuHTY',
        language: 'en',
      }}
      onFail={error => console.log(error)} 
    />
    </View> */}

      <MapView style={styles.map} 
      region={mapRegion}
      onRegionChange = {onRegionChange}/>
      <Marker coordinate={mapRegion} title='Marker'/>
      <MapView/>
      <Button title ='Get Location' onPress={userLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 0,
  },
});

export default Home;
