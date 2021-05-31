import { BUY_ITEM, TRANSFER, SALARY } from './balanceTypes'

const initialState = {
    balance: 100,
    logs: []
}

const balanceReducer = (state = initialState, action) => {


    // console.log( action.desc)
    // console.log(state)
    switch(action.type){

        case BUY_ITEM: 
            // setTheArray(prevState => [...prevState, `Entry ${prevState.length}`]);
            return {
                balance: state.balance + action.data.amount,
                logs: [...state.logs, action.desc],
            }
        break;

        case TRANSFER: 
            return {
                balance: eval(state.balance) - eval(action.payload),
                logs: [...state.logs, action.desc],
            }
        break;

        case SALARY:
            return {
                balance: eval(state.balance) + eval(action.payload),
                logs: [...state.logs, action.desc],
            }

        default: return state
    }
}

export default balanceReducer