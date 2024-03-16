import { React,useState } from "react"

import { useNavigate,navigate } from "react-router-dom"


import './Todo.css'
import { useAuth } from "./security/AuthContext"


export default function LoginComponent(){

    //state for Username, password, success and failure message
    const [Username,setUsername] = useState('barath')
    const [Password,setPassword] = useState('')
 
    const [failureMessage,setfailureMessage] = useState(false)
 
    //Authentication logic
    const AuthContext = useAuth()

    const navigate = useNavigate();
 
    //Username state change function
    function changeUsernameHandler(event){
     setUsername(event.target.value)
    }
 
    //Password state change function
    function changePasswordHandler(event){
     setPassword(event.target.value)
    }
    
    //authenticate
    function authenticate(){
      if (AuthContext.login(Username,Password)){
        navigate(`/welcome/${Username}`)
      }else{
        setfailureMessage(true);
      }
    }

 
     return (
 
        <div className="Login">  
 
         <div className="LoginForm">
 
              <div class="message">
             
                 {failureMessage && <div className='failure'>Login Failed</div>}
              </div>
               
               <div>
                 <label>Username: </label>
                 <input type="text" class="form-control" name="Username" value={Username} onChange={changeUsernameHandler}/>
               </div>
 
               <div  class="mb-3">
                 <label class="form-label">Password: </label>
                 <input type="password" class="form-control" name="Password" value={Password} onChange={changePasswordHandler}/>
               </div>
 
               <div class="mb3">
                 <button class="btn btn-success" type="submit" onClick={authenticate}>Login</button>
               </div>
         </div>
 
        </div>
  
 
 
     )
 }
 