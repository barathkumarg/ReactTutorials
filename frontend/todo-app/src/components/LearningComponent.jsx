import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';

export default function LearningComponent(){
    return (
        <div className="App">  
          
           To Do application
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
          <FourthComponent></FourthComponent>
        </div>
        
      );
}