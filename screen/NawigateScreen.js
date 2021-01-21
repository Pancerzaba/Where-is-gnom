import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import {GNOMS} from '../database/dummy-data'
import { Container, Text } from "native-base";
import MapView from 'react-native-maps'
import { useSelector} from 'react-redux'
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from 'react-native-maps';
import {GOOGLE_MAPS_APIKEY} from '../env'

class NawigateScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }


  render() {

    const gnomId = this.props.navigation.getParam('gnomId');  
    
    console.log(this.gnomId)
    const selectedProduct = GNOMS.find(prod => prod.id === gnomId)

    console.log(this.props);

    
    const origin = {latitude: 51.1090000, longitude: 17.0333000};
    const destination = {latitude: selectedProduct.lat, longitude: selectedProduct.lng};
//const GOOGLE_MAPS_APIKEY = GOOGLE_MAPS_APIKEY
    return (
      <View>
        <Text> {this.state.latitude} </Text>
        <Text> {this.state.longitude} </Text>
        {/* <Text> {this.state.error} </Text> */}
    <Text>{selectedProduct.title}</Text>
    <Text>szer {selectedProduct.lat}</Text>
    <Text>dlu {selectedProduct.lng}</Text>

    <MapView 
        style={styles.map}           
        initialRegion={{
    latitude: 51.1090000,
    longitude: 17.0333000,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }}
>
<Marker coordinate={{
           latitude: selectedProduct.lat,
           longitude: selectedProduct.lng,
      }} title={selectedProduct.title} description={selectedProduct.adress}  />

<Marker  coordinate={{
           latitude: 37.3318456,
           longitude:  17.0333000,
      }} title={'fjtj'}  description={'ja'}  />

    {/* <Marker
    key={gnom.id}
      coordinate={{ latitude : gnom.lat , longitude : gnom.lng}}
      title={gnom.title}
      description={gnom.adress}
      onPress={(e)=>{
       e.stopPropagation()
       props.navigation.navigate('Gnom',{gnomId: gnom.id})
        }}
    /> */}
    <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={2}
    strokeColor="red"
  />
</MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '70%'
  },
  map: {
   width:'100%',
   height: '70%'
  },
});

export default NawigateScreen;


