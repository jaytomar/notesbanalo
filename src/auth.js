import React from 'react'
import firebaseInstance, { authService } from './fbase'

const Auth = () => {
// const[email, setEmail]=useState('')
// const[password, setPassword]=useState('')


// const onChange = (e) => {
//   const{target : {name,value}} = e
//   if(name=='Email'){
//     setEmail(value)
//   }
//   else if(name=='Password'){
//     setPassword(value)
//   }
// }

const onSocialClick = async (e) => {
  let provider = new firebaseInstance.auth.GoogleAuthProvider();
  await authService.signInWithPopup(provider)

}
  
    return(
      <div>
        <div>
        </div>
 
      <div className='form-container'>
      <div className='form'>
      <h1>notebanalo</h1>
        <button onClick={onSocialClick}>Login with Google</button>
      </div>
      </div>
      </div>

    );
}


export default Auth;
