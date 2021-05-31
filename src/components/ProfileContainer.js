import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {buyItem, transfer, salary } from '../redux/balance/balanceActions'
import LogContainer from './LogContainer';

function ProfileContainer(props) {

    const [amountToTransfer, setAmountToTransfer] = useState(1);
    const [counter, setCounter] = useState(10);
  


    // console.log(props.balance)
    const itemList = props.item.map((item,i) =>

            <div key={i}>
                <button onClick={()=>props.buyItem(item.price, item.name)}>
                    Buy {item.name} ({item.price} AZN)
                </button>
            </div>
         )


        //  console.log(amountToTransfer)


    // const [time, setTime] = useState(Date.now());

    // useEffect(() => {
    //     // console.log(this)
    //     const interval = setInterval(() => props.salary(100), 2000);
    //     return () => {

    //         // props.salary(salary)
    //         // props.transfer(5)
    //         clearInterval(interval);
    //     };
    // }, [props]);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        // console.log(counter)

        if(counter == 0){
            props.salary(1500)
            setCounter(10);

            
        }
      }, [counter]);

    return (
        <div>
            <h3>Balance: {props.balance.balance}</h3>
            <br></br>
            
            {itemList}
            <br></br>

            <input type="text" value={amountToTransfer} onChange={e => setAmountToTransfer(e.target.value)} placeholder="Amount"></input>
            <button onClick={() => props.transfer(amountToTransfer)}>Send</button>
            <p>Novbeti artim  { counter} saniyeden olacaq </p>
            {/* <button onClick={props.buyCoffee(10)} >Buy {props.item.item} ({props.item.price} AZN)</button> */}
            {/* <button onClick={(props.buyCar)}>Buy {props.item.item} ({props.item.price} AZN) </button> */}
            <LogContainer/>
            
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
        buyItem: (amount,name) => dispatch(buyItem(amount,name)),
        transfer: (amount) => dispatch(transfer(amount)),
        salary: (amount) => dispatch(salary(amount))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
