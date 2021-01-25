import { FETCH_GNOMES, FETCH_GNOME } from '../constants';
const initialState={
    availableGnoms:[],
    gnome: {}
}
export default (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_GNOMES:
            return {
                ...state,
                availableGnoms: action.payload
            }
            case FETCH_GNOME:
            return {
                ...state,
                gnome: action.payload
            }
        default:
            return state;
    }
   
}