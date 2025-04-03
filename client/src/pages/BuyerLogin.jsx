import { useState } from "react"

export default function BuyerLogin(){
  const [toggleSignIn, setToggleSignIn] = useState(true)

  const handleSignToggle = ()=>{
    setToggleSignIn((prev)=> !toggleSignIn)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      
     { toggleSignIn ? <div className="w-[500px] h-[400px] bg-blue-400 rounded-3xl">
        <p className="text-3xl font-extrabold text-center m-5">Login</p>
      </div> : <div className="w-[500px] h-[400px] bg-green-400 rounded-3xl">
      <p className="text-3xl font-extrabold text-center m-5">Sign Up</p>

      </div> 
      }
     {toggleSignIn ? 
  <div className=" bg-white flex w-[500px] justify-center">
        <p className="text-black font-extrabold text-lg">New User ? </p> <button onClick={handleSignToggle} className="text-blue-600 underline hover:text-blue-700 font-semibold "> Signup</button>
  </div> : 
   <div className=" bg-white flex w-[500px] justify-center">
   <p className="text-black font-extrabold text-lg">Exisiting User ? </p> <button onClick={handleSignToggle} className="text-blue-600 underline hover:text-blue-700 font-semibold "> Sign in</button>
  </div> 
     } 
    </div>
  )
}

//bg-blue-700 text-white font-bold px-10 py-2 rounded-3xl mx-5