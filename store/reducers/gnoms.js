import {GNOMS} from '../../database/dummy-data'
const initialState={
    availableGnoms:GNOMS,
    //: GNOMS.filter(gnoms=>gnoms.ownerID ==='u1')
}
export default (state = initialState, action)=>{
    return state;
}