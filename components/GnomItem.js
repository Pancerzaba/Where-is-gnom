import React from 'react'
import { StyleSheet, Text, View, Image,Button } from 'react-native'


const ProductItem = props => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: props.image}}/>

            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
               
            </View>
          
     
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 250,
        margin: 20
    },
    imageContainer:{
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title:{
        fontSize: 18,
        marginVertical: 4,
    },
    price:{
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal:20
    }

})
