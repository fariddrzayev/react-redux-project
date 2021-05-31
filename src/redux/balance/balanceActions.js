import { BUY_ITEM, TRANSFER, SALARY } from './balanceTypes'

// export const buyCoffee = (amount) => {
//     return {
//         type: BUY_COFFEE,
//         data:{
//             amount
//         }
//     }
// }

// export const buyCar = () => {
//     return {
//         type: BUY_CAR
//     }
// }

export const buyItem = (amount,name) => {
    return {
        type: BUY_ITEM,
        data:{
            amount,
        },
        desc: `${name} olan xercisniz: ${amount}`

    }
}

export const transfer = (amount) => {
    return {
        type: TRANSFER,
        payload: amount,
        desc: `Balansinizdan ${amount} miqdaqinda pul kucuruldu`
    }
}

export const salary = (amount) => {
    return {
        type: SALARY,
        payload: amount,
        desc: `Maashadan gelen miqdar: ${amount}`
    }
}