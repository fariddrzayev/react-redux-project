import { BUY_COFFEE } from './balanceTypes'

const initialState = {
    balance: 100
}

const balanceReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COFFEE: return {
            balance: state.balance -10
        }
        default: return state
    }
}

export default balanceReducer