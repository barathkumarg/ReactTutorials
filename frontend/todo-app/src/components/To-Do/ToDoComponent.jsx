import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './TodoListComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Logout from './LogoutComponent';
import AuthProvider, { useAuth } from './security/AuthContext'


function AuthenticatedRoute({children}) {
 
    const AuthContext = useAuth()
    
    if (AuthContext.isAuthenticated){
      return children
    } else{
      <Navigate to="/"/>
    }


}

export default function ToDoComponent(){

    return (
      <div className="ToDoComponent">
        <BrowserRouter>
          <AuthProvider>
            <HeaderComponent/>
              <Routes>
                  <Route path='/' element={ <LoginComponent/> }></Route>
                  <Route path='/login' element={ <LoginComponent/> }></Route>

                  
                  <Route path='/welcome/:username' element={
                      <AuthenticatedRoute>
                          <WelcomeComponent />
                      </AuthenticatedRoute> 
                  } />

                  <Route path='/todos' element={
                      <AuthenticatedRoute>
                          <ListTodosComponent />
                      </AuthenticatedRoute> 
                  } />

                  <Route path='/logout' element={ <Logout/> }></Route>


                  <Route path="*" element={ <ErrorComponent/> }></Route>
              </Routes>
            <FooterComponent/>
          </AuthProvider>
        </BrowserRouter>
        
        
        
      </div>
        
    )

}





