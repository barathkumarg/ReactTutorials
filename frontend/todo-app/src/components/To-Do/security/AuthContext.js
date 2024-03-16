import { createContext, useContext, useState } from "react";

//1: Create a Context
const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)
//2: Share the created context with other components
export default function AuthProvider({ children }) {

    //Put some state in the context

    //Authentication check
    const [isAuthenticated,setAuthenticate] = useState(false)


        //authentication login
        function login(Username,Password){
     
            if (Username==='barath' && Password==='dummy'){
              setAuthenticate(true)
              return true
              
            }else{
              setAuthenticate(false)
              return false
            }
        
         }

        //authenticate logout
        function logout(){
            AuthContext.setAuthenticate(false)
       }

    return (
        <AuthContext.Provider value={ {login,isAuthenticated,logout} }>
            {children}
        </AuthContext.Provider>
    )
}