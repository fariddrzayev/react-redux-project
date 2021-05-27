import React, {useState, useEffect, useLayoutEffect} from 'react'

function LogContainer(props) {

    const [amountToTransfer, setAmountToTransfer] = useState(1);
    const [salary, setSalary] = useState(100);
    const [counter, setCounter] = useState(10);


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

    // const itemList = props.item.map(item =>

    //         <div>
    //             <button onClick={()=>props.buyItem(item.price)}>
    //                 Buy {item.name} ({item.price} AZN)
    //             </button>
    //         </div>
        //  )




    return (
        <div>

            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-4">
                        <ul class="list-group">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                
                </div>
            </div>
            <div class="col-md-3 justify-content-md-center ">
                
            </div>
            
        </div>
    )
}

export default LogContainer



