import { BUY_COFFEE, BUY_CAR, BUY_ITEM } from './balanceTypes'

const initialState = {
    balance: 100
}

const balanceReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COFFEE: 
            return {
                balance: state.balance + action.data.amount
            }
        break;

        case BUY_ITEM: 
            return {
                balance: state.balance + action.data.amount
            }
        break;

        case BUY_CAR: return {
            balance: state.balance -50
        }
        default: return state
    }
}

export default balanceReducer