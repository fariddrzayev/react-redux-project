import React from 'react'
import {connect} from 'react-redux'
import { buyCoffee, buyCar, buyItem } from '../redux/balance/balanceActions'

function ProfileContainer(props) {

    const itemList = props.item.map(item =>

            <div>
                <button onClick={()=>props.buyItem(item.price)}>
                    Buy {item.name} ({item.price} AZN)
                </button>
            </div>
         )

    return (
        <div>
            <h3>Balance: {props.balance.balance}</h3>
            <br></br>
            
            {itemList}



            {/* <button onClick={props.buyCoffee(10)} >Buy {props.item.item} ({props.item.price} AZN)</button> */}
            {/* <button onClick={(props.buyCar)}>Buy {props.item.item} ({props.item.price} AZN) </button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        balance: state.balance,
        item: state.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCoffee: (amount) => dispatch(buyCoffee(amount)),
        buyCar: () => dispatch(buyCar()),
        buyItem: (amount) => dispatch(buyItem(amount))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
