import GNOMS from '../../database/dummy-data'
const initialState={
    availableProducts:GNOMS,
    userProducts: Gnom.filter(prod=>prod.ownerID ==='u1')
}
export default (state = initialState, action)=>{
    return state;
}