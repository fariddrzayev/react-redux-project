import { BUY_ITEM, TRANSFER, SALARY } from './balanceTypes'

const initialState = {
    balance: 100
}

const balanceReducer = (state = initialState, action) => {


    console.log(action)
    switch(action.type){

        case BUY_ITEM: 
            return {
                balance: state.balance + action.data.amount
            }
        break;

        case TRANSFER: 
            return {
                balance: eval(state.balance) - eval(action.payload)
            }
        break;

        case SALARY:
            return {
                balance: eval(state.balance) + eval(action.payload)
            }

        default: return state
    }
}

export default balanceReducer