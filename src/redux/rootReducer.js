import balanceReducer from './balance/balanceReducer'
import itemReducer from './item/itemReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    balance: balanceReducer,
    item: itemReducer
})

export default rootReducer