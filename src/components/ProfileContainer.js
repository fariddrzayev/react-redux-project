import React from 'react'
import {connect} from 'react-redux'

function ProfileContainer(props) {
    return (
        <div>
            <h3>Balance: {props.balance.balance}</h3>
            <button onClick={} >Buy {props.item.item} ({props.item.price} AZN)</button>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        balance: state.balance,
        item: state.item
    }
}

export default connect(mapStateToProps)(ProfileContainer)
