import React, { useState } from 'react';
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function Counter(){
 
    //state implementation
    const [count,setcount] = useState(0);

    //Parent increment function
    function ParentincrementCounterFunction({increment}){
        setcount(count + increment)
    }
    
    //Parent decrement function
    function ParentdecrementCounterFunction({increment}){
      setcount(count - increment)
      }


  return (
         <div className="Counter">
            <span className='count'>{count}</span>
              <CounterButton increment={1} incrementMethod={ParentincrementCounterFunction} decrementMethod={ParentdecrementCounterFunction}/>
              <CounterButton increment={2} incrementMethod={ParentincrementCounterFunction} decrementMethod={ParentdecrementCounterFunction}/>
              <CounterButton increment={5} incrementMethod={ParentincrementCounterFunction} decrementMethod={ParentdecrementCounterFunction}/>
         </div>
  )

}

function CounterButton({increment,incrementMethod,decrementMethod}){
   
        //child increment function
        function incrementCounterFunction(){
          incrementMethod({increment})
      }
      
      //child decrement function
      function decrementCounterFunction(){
        decrementMethod({increment})
        }

    return (

      <div className="CounterDiv">

        <div>
            <button className="counterButton" onClick={incrementCounterFunction}>+{increment}</button>
            <button className="counterButton" onClick={decrementCounterFunction}>-{increment}</button>
        </div>
      </div>

    );

}

CounterButton.propTypes = {

  increment: PropTypes.number
}

CounterButton.propTypes = {

  increment: 1
}
