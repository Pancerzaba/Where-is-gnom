import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, Image, View, Alert, Button } from 'react-native';
import MainButton from '../components/MainButtons';

import {GNOMS} from '../database/dummy-data'
import Gnom from '../model/gnom';


const GnomScreen = props => {
  
   const[statusGnom, setStatusGnom] = useState('Dodaj')


    const gnomId = props.navigation.getParam('gnomId');    
    const selectedProduct = GNOMS.find(prod => prod.id === gnomId)
    
return(
        <View style={styles.container}>
            {/* <Image style={styles.gnom} source={require('../assets/pomagajek.jpg')} /> */}
            <Image style={styles.image} source={{uri: selectedProduct.imageURL}}/>
             <View style={styles.textConteiner}> 
                <Text style={styles.title}>{selectedProduct.title}</Text>
                <Text style={styles.adres}>{selectedProduct.adress} </Text>
                <Text>
                    {selectedProduct.description}    
                 </Text>
                <View style={styles.buttons}>
                    <MainButton>Naviguj</MainButton>
                    <MainButton  onPress={ ()=>setStatusGnom('Dodano')}  >{statusGnom}</MainButton>
                </View>
            </View> 
         

        </View>
    )
}

GnomScreen.navigationOptions={
    headerTitle: 'Krasnal ',
    headerStyle: {
        backgroundColor: '#452187',
    },
    headerTintColor: 'white'
}
export default GnomScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: '100%',
        margin: 10

    },
    container: {
        width: '100%',
        height: '100%',

       
    },textConteiner: {
        alignItems: 'center',
        margin: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor:'#452187',
        color: 'white',
        padding: 10,
        borderRadius: 2,
        margin: 10
    },
    adres:{
        fontWeight: 'bold',
        margin: 5
    },
    buttons:{
        flexDirection: 'row',
        display:'flex',
        alignItems: 'center',
        margin: 10,
        
    }
})
