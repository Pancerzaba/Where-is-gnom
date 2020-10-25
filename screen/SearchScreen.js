import React, { Component } from 'react'
import { StyleSheet, Text, Image, TextInput, View, TouchableOpacity } from 'react-native'
import MainButton from '../components/MainButtons'

const SearchScreen = props => {
    let ButtonComponent =TouchableOpacity;
    const [value, onChangeText] = React.useState('Szukaj krasnala');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>

            <View style={styles.buttons}>
                <MainButton>Dzielnice</MainButton>
                <MainButton>Trasy</MainButton>
                <MainButton>Kategorie</MainButton>
            </View>
            <ButtonComponent style={styles.mapContainer} onPress={()=>{
                    props.navigation.navigate({routeName:'Gnom'})
                }}>
                <Image style={styles.map} source={require('../assets/mapa.png')} 
               />
            </ButtonComponent>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
       width: '100%'
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical: 10
    },
    inputContainer: {
        backgroundColor: '#452187',
        padding: 10,
        textAlign: 'center',
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'white',
        width: "60%",
        padding: 10,
        textAlign: 'center'

    },
    mapContainer: {
        width: '100%',
        height:'80%',
        justifyContent: 'flex-end',
        textAlign: 'center',
    },
    map: {
        // width: '90%',
        height: '100%'
    },
})
