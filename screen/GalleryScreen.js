import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import MainButton from '../components/MainButtons'
import {useSelector} from 'react-redux'



import GnomItem from '../components/GnomItem'

const GalleryScreen = props => {
    let ButtonComponent =TouchableOpacity;
    const gnoms = useSelector(state=>state.gnoms.availableGnoms);
    return ( 
      <ScrollView>
        <View style={styles.container}>
            {/* <Text style={styles.title}>Galeria</Text> */}
            <View style={styles.buttons}>
                <MainButton>Wszystkie</MainButton>
                <MainButton>Zebrane</MainButton>
                <MainButton>Nie Zebrane</MainButton>
            </View>
            <View style={styles.fotos}>
                <FlatList data={gnoms} 
                    keyExtractor={item=>item.id}
                    renderItem={
                        itemData=>
                        <ButtonComponent  onPress={()=>{
                            props.navigation.navigate('Gnom',{
                                gnomId: itemData.item.id,
                                productTitle: itemData.item.title
                            })
                            }}>
                            <GnomItem image={itemData.item.imageURL} 
                            title={itemData.item.title}  />
                        </ButtonComponent> }
                />
                {/* <ButtonComponent  onPress={()=>{
                props.navigation.navigate({routeName:'Gnom'})
            }}>
                    <Image style={styles.foto} source={require('../assets/pomagajek.jpg')} />
                </ButtonComponent> 
                    <Image style={styles.foto} source={require('../assets/orzezwiacz.jpg')} />
                    <Image style={styles.foto} source={require('../assets/pomagajek.jpg')} /> */}
                </View>
            </View>
            </ScrollView>
    )
}
GalleryScreen.navigationOptions={
    headerTitle: 'Gallery ',
    headerStyle: {
        backgroundColor: '#452187',
    },
    headerTintColor: 'white'
}
export default GalleryScreen

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: 'column',
        //height: '100%',
        //width: '100%',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
//backgroundColor:'green',
alignItems: 'center'
        // alignItems: 'center'

    },
    title:{
        fontSize: 20,
        //fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor:'#452187',
        color: 'white',
        padding: '10px',
        //borderRadius: 25,
        margin: 10
    },
    buttons:{
       //display: "flex",
        // alignItems: 'center',
       // backgroundColor: 'red',
        alignItems: 'center',
        flexDirection: 'row',
        width: 320,
        height: 100,
        margin: 10
      
        
       
    },
    foto:{
        
        width: 150,
        margin: 10,
        flex: 1,
        display: "flex"
    },
    fotos:{
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    }
})
