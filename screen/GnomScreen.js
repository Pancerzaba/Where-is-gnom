import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';
import MainButtons from '../components/MainButtons'
import MainButton from '../components/MainButtons';
import { color } from 'react-native-reanimated';

const GnomScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.gnom} source={require('../assets/pomagajek.jpg')} />
            <View style={styles.textConteiner}>
            <Text style={styles.title}>Pomagajek</Text>
            <Text style={styles.adres}>Sukiennice 12, Wrocław</Text>
            <Text>
                Ten niezwykły krasnal to strażnik wartości, o których w dzisiejszych czasach tak łatwo zapominamy.
                Jego praca trwa nieustannie przez cały rok a jego misją jest poprawa jakości życia nieuleczalnie chorych dzieci i pomoc w ich leczeniu.
            </Text>
            <View style={styles.buttons}>
                <MainButton>Naviguj</MainButton>
                <MainButton>Dodaj</MainButton>
            </View></View>
        </View>
    )
}

export default GnomScreen

const styles = StyleSheet.create({
    gnom: {
        flex: 1,
        height: '100%',
        margin: 10

    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: ' red',
       
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
        padding: '10px',
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
