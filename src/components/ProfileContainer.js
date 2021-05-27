import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { buyCar, buyItem, transfer, salary } from '../redux/balance/balanceActions'
import LogContainer from './LogContainer';

function ProfileContainer(props) {

    const [amountToTransfer, setAmountToTransfer] = useState(1);
    const [salary, setSalary] = useState(100);
    const [counter, setCounter] = useState(10);
    // const [activity, setActivity] = useState(10);
    const ArrayDep = () => {
        const [randomNumber, setRandomNumber] = useState(0)
        const [effectLogs, setEffectLogs] = useState([])
      
        useLayoutEffect(
          () => {
            setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
          },
          [randomNumber]
        )
      
        return (
          <div>
            <h1>{randomNumber}</h1>
            <button
              onClick={() => {
                setRandomNumber(Math.random())
              }}
            >
              Generate random number!
            </button>
            <div>
              {effectLogs.map((effect, index) => (
                <div key={index}>{'🍔'.repeat(index) + effect}</div>
              ))}
            </div>
          </div>
        )
      }
    const itemList = props.item.map(item =>

            <div>
                <button onClick={()=>props.buyItem(item.price)}>
                    Buy {item.name} ({item.price} AZN)
                </button>
            </div>
         )


        //  console.log(amountToTransfer)

    

    // const [time, setTime] = useState(Date.now());

    useEffect(() => {
        console.log(this)
        const interval = setInterval(() => props.salary(100), 5000);
        return () => {

            // props.salary(salary)
            // props.transfer(5)
            clearInterval(interval);
        };
    }, []);

    // useEffect(() => {
    //     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    //     // console.log(counter)

    //     if(counter == 0){
    //         props.salary(1500)
    //         setCounter(10);

            
    //     }


    //   }, [counter]);

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
        buyCar: () => dispatch(buyCar()),
        buyItem: (amount) => dispatch(buyItem(amount)),
        transfer: (amount) => dispatch(transfer(amount)),
        salary: (amount) => dispatch(salary(amount))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
