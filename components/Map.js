import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'

export default function Map() {
   return(
    <View style={styles.container}>
    <MapView style={styles.map} region={{
      latitude: 51.10000000,
      longitude: 17.0333000,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }}>
      <MapView.Marker coordinate={{
           latitude: 51.10000000,
           longitude: 17.0333000,
      }} title={"Wrocław"} description={'Stolica Dolnegośląska'} />

    </MapView>
</View>
   )
}

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

