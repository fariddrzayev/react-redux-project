import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { buyCar, buyItem, transfer, salary } from '../redux/balance/balanceActions'

function ProfileContainer(props) {

    const [number, setNumber] = useState(1);
    const [salary, setSalary] = useState(100);

    console.log(number)
    const itemList = props.item.map(item =>

            <div>
                <button onClick={()=>props.buyItem(item.price)}>
                    Buy {item.name} ({item.price} AZN)
                </button>
            </div>
         )



    

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            props.salary(salary)
            props.transfer(5)
            clearInterval(interval);
        };
    }, []);




    return (
        <div>
            <h3>Balance: {props.balance.balance}</h3>
            <br></br>
            
            {itemList}
            <br></br>

            <input type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder="Amount"></input>
            <button onClick={() => props.transfer(number)}>Send</button>

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
        // buyCoffee: (amount) => dispatch(buyCoffee(amount)),
        buyCar: () => dispatch(buyCar()),
        buyItem: (amount) => dispatch(buyItem(amount)),
        transfer: (amount) => dispatch(transfer(amount)),
        salary: (amount) => dispatch(salary(amount))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
