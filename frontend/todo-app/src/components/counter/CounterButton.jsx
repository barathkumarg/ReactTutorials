import React from 'react';
import {PropTypes} from 'prop-types'

export default function CounterButton({increment,incrementMethod,decrementMethod}){
   
    //Calling the direct Parent functions
return (

  <div className="CounterDiv">

    <div>
        
        <button className="counterButton" onClick={() => incrementMethod({increment})}>+{increment}</button> 
        <button className="counterButton" onClick={() => decrementMethod({increment})}>-{increment}</button>
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
