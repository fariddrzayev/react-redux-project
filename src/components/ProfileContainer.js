import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { buyCar, buyItem, transfer, salary } from '../redux/balance/balanceActions'

function ProfileContainer(props) {

    const [amountToTransfer, setAmountToTransfer] = useState(1);
    const [salary, setSalary] = useState(100);
    const [counter, setCounter] = useState(10);

    const itemList = props.item.map(item =>

            <div>
                <button onClick={()=>props.buyItem(item.price)}>
                    Buy {item.name} ({item.price} AZN)
                </button>
            </div>
         )


         console.log(amountToTransfer)

    

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => props.salary(100), 5000);
        return () => {

            // props.salary(salary)
            // props.transfer(5)
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => setCounter(counter - 1), 1000)

        con 
        // return counter-1
        // counter > 7 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

    return (
        <div>
            <h3>Balance: {props.balance.balance}</h3>
            <br></br>
            
            {itemList}
            <br></br>

            <input type="text" value={amountToTransfer} onChange={e => setAmountToTransfer(e.target.value)} placeholder="Amount"></input>
            <button onClick={() => props.transfer(amountToTransfer)}>Send</button>
            <p>Novbeti artim: { counter} </p>
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
