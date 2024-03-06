import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'


export default function ToDoComponent(){

    return (
      <div className="ToDoComponent">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LoginComponent/> }></Route>
          <Route path='/login' element={ <LoginComponent/> }></Route>
          <Route path='/welcome' element={ <WelcomeComponent/> }></Route>
        </Routes>
        </BrowserRouter>
        
      </div>
        
    )

}


function LoginComponent(){

   //state for Username, password, success and failure message
   const [Username,setUsername] = useState('barath')
   const [Password,setPassword] = useState('')
   const [successMessage,setsuccessMessage] = useState(false)
   const [failureMessage,setfailureMessage] = useState(false)


   const navigate = useNavigate();

   //Username state change function
   function changeUsernameHandler(event){
    setUsername(event.target.value)
   }

   //Password state change function
   function changePasswordHandler(event){
    setPassword(event.target.value)
   }

   //authentication
   function authenticate(){
    
    if (Username==='barath' && Password==='dummy'){
      setsuccessMessage(true)
      setfailureMessage(false)
      navigate('/welcome')
    }else{
      setfailureMessage(true)
      setsuccessMessage(false)
    }

 }

    return (

       <div className="Login">  

        <div className="LoginForm">

             <div class="message">
                {successMessage && <div className='success'>Success</div>}
                {failureMessage && <div className='failure'>Login Failed</div>}
             </div>
              
              <div>
                <lable>Username: </lable>
                <input type="text" name="Username" value={Username} onChange={changeUsernameHandler}/>
              </div>

              <div>
                <label>Password: </label>
                <input type="password" name="Password" value={Password} onChange={changePasswordHandler}/>
              </div>

              <div>
                <button type="submit" onClick={authenticate}>Login</button>
              </div>
        </div>

       </div>
 


    )
}


function WelcomeComponent(){
  return (
    <div className='welcome'>Welcome user</div>
  )
}