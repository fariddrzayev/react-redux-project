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
        desc: `You spent : ${amount} AZN for ${name}`

    }
}

export const transfer = (amount) => {
    return {
        type: TRANSFER,
        payload: amount,
        desc: `Successfully transfered ${amount} AZN from your balance`
    }
}

export const salary = (amount) => {
    return {
        type: SALARY,
        payload: amount,
        desc: `Salary: +${amount} AZN`
    }
}