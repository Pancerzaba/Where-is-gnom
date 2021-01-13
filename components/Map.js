import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import { useSelector} from 'react-redux'

import { Marker } from 'react-native-maps';

 const Map= props=> {
   console.log(props)
  const gnoms = useSelector(state=>state.gnoms.availableGnoms);

  
  


   return(
    <View style={styles.container} >

<MapView 
        style={styles.map}           
  region={{
    latitude: 51.1090000,
    longitude: 17.0333000,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }}
>
  {props.gnoms.map((gnom) => (
    <Marker
    key={gnom.id}
      coordinate={{ latitude : gnom.lat , longitude : gnom.lng}}
      title={gnom.title}
      description={gnom.adress}
      onPress={(e)=>{
       e.stopPropagation()
       props.navigation.navigate('Gnom',{gnomId: gnom.id})
        }}
    />
  ))}
</MapView>


    {/* <MapView style={styles.map} region={{
      latitude: 51.1090000,
      longitude: 17.0333000,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}>
      <MapView.Marker coordinate={{
           latitude: 51.10977854,
           longitude: 17.03175120,
      }} title={"Pomagajek"} description={'Sukiennice 2'}  onPress={()=>{
        props.navigation.navigate('Gnom',{
            gnomId: itemData.item.id,
            productTitle: itemData.item.title
        })
    }}/>
      <MapView.Marker coordinate={{
           latitude: 51.10992499,
           longitude: 17.03126084,
      }} title={"Wodziarz"} description={'Rynek'} /> */}
{/* 
{this.state.markers.map((marker, gnoms) => (
    <Marker
      key={item.itemData.id}
      coordinate={item.itemData.latlng}
      title={item.itemData.title}
      description={item.itemData.description}
    />
  ))} */}
{/* <MapView.Marker coordinate={{
           latitude: 51.10977854,
           longitude:  17.03175120,
      }} title={"Pomagajek"} description={'Sukiennice 2'} /> */}
         {/* <MapView.Marker coordinate={{
           latitude: 51.10992499830175,
           longitude:  17.031260849882976,
      }} title={"Wodziarz"} description={'Ratusz'} /> */}

   {/* </MapView> */}
</View>
   )
}

export default Map;
   const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      map: {
        position: 'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
      }
    })

//export default Map

