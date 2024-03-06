import React from 'react';
import './App.css';


import ToDoComponent from './components/To-Do/LoginComponent';

//Functional component

  function App() {  //Primary return function
   
    return (
      <div className="App">  
        {/* <Counter/> */}
        <ToDoComponent/>
        
      </div>
      
    );
  }





 



export default App;
