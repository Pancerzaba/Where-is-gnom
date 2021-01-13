import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import MyButton from '../components/MainButtons'
import {useSelector} from 'react-redux'

const StartScreen = props => {
    const gnoms = useSelector(state=>state.gnoms.availableGnoms);
    return (

        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.Logo} source={require('../assets/logov1.png')} />
            </View>
            <View style={styles.buttons}>
                <MyButton  onPress={()=>{
                    props.navigation.navigate({routeName: 'Search'})
                 
                }} >Znajdz krasnala</MyButton>
                <MyButton  onPress={()=>{
                    props.navigation.navigate({routeName:'Gallery'})
                }} >Twoje krasnale</MyButton>
                <MyButton >Wydarzenia</MyButton>


            </View>
        </View>
    )
}
StartScreen.navigationOptions={
    headerTitle: ' ',
    headerStyle: {
        backgroundColor: '#452187',
    },
    headerTintColor: 'white'
}
export default StartScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    buttons: {
        height: 200,
        //alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'

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
