import React from 'react'
import {connect} from 'react-redux'
import { buyCoffee } from '../redux/balance/balanceActions'

function ProfileContainer(props) {
    return (
        <div>
            <h3>Balance: {props.balance.balance}</h3>
            <button onClick={props.buyCoffee} >Buy {props.item.item} ({props.item.price} AZN)</button>
            
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
        buyCoffee: () => dispatch(buyCoffee())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
