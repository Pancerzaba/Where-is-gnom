import {FETCH_GNOMES, FETCH_GNOME} from '../constants'
import firebase from 'firebase'

export const fetchGnomes = () => async (dispatch) => {
    try {
        const snapshot = await firebase.firestore().collection('gnomes').get()
     const gnomes = snapshot.docs.map(doc => {
         const data = doc.data()
           return {...data}
     })
           dispatch({
               type: FETCH_GNOMES,
               payload: gnomes
           })
    } catch (err) {
        console.log(err)
    }
}

export const fetchGnome = (id) => async (dispatch) => {
    try {
        const snapshot = await firebase.firestore().collection('gnomes').where('id', '==', id).get()
     const gnome = snapshot.docs.map(doc => {
         const data = doc.data()
           return {...data}
     })
           dispatch({
               type: FETCH_GNOME,
               payload: gnome[0]
           })
    } catch (err) {
        console.log(err)
    }
}