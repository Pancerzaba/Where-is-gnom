import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { Container, Text } from "native-base";
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from 'react-native-maps';
import ENV from '../env'
import { fetchGnome } from "../store/actions/Gnom";

const NawigateScreen = (props) => {

  const gnomId = props.navigation.getParam('gnomId');  

  const {gnome} = useSelector(state => state.gnoms)

  const dispatch = useDispatch()


  useEffect(() => {
      dispatch(fetchGnome(gnomId))
  }, [gnomId])


  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("wokeeey");
        console.log(position);
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setError(null)
      },
      (err) => setErr(err.message),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }, [])

  
  const origin = {latitude:  51.0926288, longitude:  17.0140662};
  const destination = {latitude: gnome.lat, longitude: gnome.lng};
  


  return (
    <View>
      {/* <Text> {latitude} </Text>
      <Text> {longitude} </Text>
  <Text>{gnome.title}</Text>
  <Text>szer {gnome.lat}</Text>
  <Text>dlu {gnome.lng}</Text> */}

  <MapView 
      style={styles.map}           
      initialRegion={{
  latitude: gnome.lat,
  longitude: gnome.lng,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}}
>
<Marker coordinate={{
         latitude: gnome.lat,
         longitude: gnome.lng,
    }} title={gnome.title} description={gnome.adress}  />

{/* <Marker  coordinate={{
         latitude: latitude,
         longitude:  longitude,
         
    }} title={'Tu jestem'}   /> */}

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
  apikey={ENV.GOOGLE_MAPS_APIKEY}
  strokeWidth={2}
  strokeColor="red"
/>
</MapView>
    </View>
  );
}
NawigateScreen.navigationOptions={
  headerTitle: ' Nawiguj do krasnala ',
  headerStyle: {
      backgroundColor: '#452187',
  },
  headerTintColor: 'white'
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '70%'
  },
  map: {
   width:'100%',
   height: '100%'
  },
});

export default NawigateScreen;


