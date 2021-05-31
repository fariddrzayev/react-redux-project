import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'


function LogContainer(props) {

  const [theArray, setTheArray] = useState([]);
  // const addEntryClick = () => {
  //     setTheArray(prevState => [...prevState, `Entry ${prevState.length}`]);
  // };

  // console.log(props.balance.logs)
  useEffect(() => {
    // setTheArray(oldArray => [...oldArray, `Entry ${oldArray.length}`])
    // setInterval(() => setTheArray(oldArray => [...oldArray, `Entry ${oldArray.length}`]), 500);
  }, []);

  return (
    <div>
      {/* <input type="button" onClick={addEntryClick} value="Add" />, */}
        <div>{props.balance.logs.map((entry,i) =>
          <div key={i}>{entry}</div>
        )}
        </div>
    </div>
  )
  
}


const mapStateToProps = state => {
  return {
      balance: state.balance,
      logs: state
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       // buyCoffee: (amount) => dispatch(buyCoffee(amount)),
//       buyCar: () => dispatch(buyCar()),
//       buyItem: (amount) => dispatch(buyItem(amount)),
//       transfer: (amount) => dispatch(transfer(amount)),
//       salary: (amount) => dispatch(salary(amount))
//   }
// }

export default connect(mapStateToProps)(LogContainer)

