import { BUY_COFFEE, BUY_CAR, BUY_ITEM } from './balanceTypes'

export const buyCoffee = (amount) => {
    return {
        type: BUY_COFFEE,
        data:{
            amount
        }
    }
}

export const buyCar = () => {
    return {
        type: BUY_CAR
    }
}

export const buyItem = (amount) => {
    return {
        type: BUY_ITEM,
        data:{
            amount
        }
    }
}