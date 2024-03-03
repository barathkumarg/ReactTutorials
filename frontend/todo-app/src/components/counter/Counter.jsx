import React, { useState } from 'react';

import './Counter.css'
import CounterButton from './CounterButton';

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

    //Parent reset function
    function ParentResetFunction(){
      setcount(0)
    }


  return (
         <div className="Counter">
            <span className='count'>{count}</span>
              <CounterButton increment={1} incrementMethod={ParentincrementCounterFunction} decrementMethod={ParentdecrementCounterFunction}/>
              <CounterButton increment={2} incrementMethod={ParentincrementCounterFunction} decrementMethod={ParentdecrementCounterFunction}/>
              <CounterButton increment={5} incrementMethod={ParentincrementCounterFunction} decrementMethod={ParentdecrementCounterFunction}/>

              <div className='resetButtonDiv'>
                     <button className='resetButton' onClick={ParentResetFunction}>Reset</button>
              </div>
         </div>
  )

}

