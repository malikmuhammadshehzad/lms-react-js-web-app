import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase';
 
 

const auth = getAuth(app);


function Login() {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const LogIn =()=>signInWithEmailAndPassword(
    auth,email,password
).then((value)=>alert("UserLogin")
).catch((v)=>alert('user no found'))

  return (
    <>
    <div className='SignUp' >
     <label> Email </label>
     <input onChange={e=>setEmail(e.target.value)} value={email} type='email' placeholder='Enter you email here' />
     <label> Password </label>
     <input onChange={e=>setPassword(e.target.value)} value={password} type='password' placeholder='Enter you password here'/>
         <button onClick={LogIn} > Login user</button>
    </div>
    </>
  )
}

export default Login