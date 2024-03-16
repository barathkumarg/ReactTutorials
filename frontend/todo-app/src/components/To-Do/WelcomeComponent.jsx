import React from 'react';
import { useParams,Link } from 'react-router-dom';

export default function WelcomeComponent(){
    const {username } = useParams()  //get the same key-pair value 
    return (
      <div className='welcome'>
        <h1>Welcome {username}</h1>
        <div>
                  Manage your todos - <Link to="/todos">Go here</Link>
        </div>
        </div>
    )
  }