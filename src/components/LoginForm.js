import React, { useState } from 'react'

const LoginForm = () => {
const [IsSignIn, setIsSignIn] = useState(true);

const toggleSignInForm = () => {
    setIsSignIn(!IsSignIn)
}


  return (
    <div className=''>
  <form className='p-12 bg-black absolute w-2/12 top-[20%] left-[40%] flex flex-col text-white bg-opacity-80 rounded-lg '  >
    <h1 className=' text-3xl py-4 mx-1 font-bold ' >{IsSignIn ? "Sign In" : "Sign Up"}</h1>
    { IsSignIn ? "" :  <input className='p-4 my-4 bg-gray-700  ' type='text' placeholder='Full Name '   />}
    <input className='p-4 my-4 bg-gray-700  ' id='email' type='text' placeholder='Email '/>
    <input className='p-4 my-4 bg-gray-700  ' type='text' placeholder='Password '   />
    
    <button    className=  "bg-red-700 p-4 my-6 rounded-lg">{IsSignIn ? "Sign In" : "Sign Up" }</button>
    <p className="p-4 cursor-pointer "  onClick={toggleSignInForm} >
          {IsSignIn
            ? "New To Netflix ? Sign Up Now"
            : "Already A user ? Sign In Now "}
        </p>
  </form>
    </div>
  )
}

export default LoginForm
