import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import MyButton from '../components/MainButtons'

const StartScreen = () => {
    return (

        <View>
            <View style={styles.logoContainer}>
                <Image style={styles.Logo} source={require('../assets/logov1.png')} />
            </View>
            <View style={styles.buttons}>
                <MyButton >Znajdz krasnala</MyButton>
                <MyButton >Twoje krasnale</MyButton>
                <MyButton >Wydarzenia</MyButton>


            </View>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    buttons: {
        height: 200,
        justifyContent: 'space-between'


    }, Logo: {
        width: 150,
        height: 150,
    
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 15,
        height: 300
    }
})
