// const initialState = {
//     item: 'coffee',
//     price: 10
// }
import { buyCoffee, buyCar } from '../balance/balanceActions'

const initialState = [
    {
        name: 'coffee',
        price: 10,
    },
    {
        name: 'car',
        price: -100,
    },
    {
        name: 'bike',
        price: -50,
    },
]


const itemReducer = (state = initialState, action) => {
    return state
}

export default itemReducer


// export default initialState