import PRODUCTS from '../../data/dummy-data'
const initialState={
    availableProducts:PRODUCTS,
    userProducts: Gnom.filter(prod=>prod.ownerID ==='u1')
}
export default (state = initialState, action)=>{
    return state;
}