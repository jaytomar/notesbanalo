import React, { useEffect, useState } from 'react'
import './app.css'
import AppRouter from './AppRouter'
import {authService} from './fbase'

const App = () => {

  
  const[isLoggedIn, setLoggedin] = useState(false)
  const[initialize, setInit] = useState(false)
  const[userObj, setUserObj] = useState(null)
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setUserObj({user})
        setLoggedin(true);

      }
      else{
        setLoggedin(false);
      }
    })
    setInit(true)
  },[])
  
  return(
    <>
    {
      initialize ? <AppRouter isLogged={isLoggedIn} userObj={userObj}/> : "initialize"
    }
    </>
    );
}


export default App;
