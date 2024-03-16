import React from 'react';
import './App.css';

// import Counter from './components/counter/Counter';
import ToDoComponent from './components/To-Do/ToDoComponent';

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
