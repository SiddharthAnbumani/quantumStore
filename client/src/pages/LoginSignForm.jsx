import { useState } from "react"
import Input from "../components/Input"
import CusButton from "../components/cusButton"
import OauthButton from "../components/OauthButton"

export default function BuyerLogin(){
  const [toggleSignIn, setToggleSignIn] = useState(true)

  const handleSignToggle = ()=>{
    setToggleSignIn((prev)=> !toggleSignIn)
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      
     { toggleSignIn ? 

     <div className="h-[80%] w-[80%] bg-black/70 backdrop-blur-3xl rounded-t-3xl flex flex-col space-y-3">
        <p className="text-4xl font-extrabold text-white text-center m-5">Login</p>
        
        <div className="text-black w-full h-[80%] flex flex-col items-center justify-center space-y-2"> 
          <div className="px-30 flex w-full justify-center">
            <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">Email : </label>
            <input type="email"  className=" bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-lg"/>
          </div>

          <div className=" px-30 flex w-full justify-center ">
            <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">Password : </label>
            <input type="password"  className="bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-xl text-white"/>
          </div>

          <CusButton
          text='Login'
          btnClass='bg-blue-700 my-5'
          />
          <OauthButton  oauthClass='my-5'/>
        </div>
      </div> 
      
      : 
      
      <div className="h-[80%] w-[80%] bg-black/70 backdrop-blur-3xl rounded-t-3xl flex flex-col space-y-3">
      <p className="text-4xl font-extrabold text-white text-center m-5">Sign Up</p>
      
      <div className="text-black w-full h-[80%] flex flex-col items-center justify-center space-y-2"> 
       
        <div className="px-30 flex w-full justify-between space-x-5">
          <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">First Name: </label>
          <input type="email"  className=" bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-lg"/>

          <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">Last Name : </label>
          <input type="email"  className=" bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-lg"/>
        </div>

        <div className="px-30 flex w-full justify-between space-x-5">
          <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">Age : </label>
          <input type="number"  className=" bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-lg"/>

          <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">Gender: </label>
          {/* <input type=""  className=" bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-lg"/> */}
          <select name="" id="" className="bg-white/60 text-center rounded-lg">
            <option value="*">--Select--</option>
            <option value="male">Male</option>
            <option value="female"> Female</option>
            <option value="rather not say"> Rather not Say</option>
          </select>
        </div>

        <div className="px-30 flex w-full justify-center">
          <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">Email : </label>
          <input type="email"  className=" bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-lg"/>
        </div>

        <div className=" px-30 flex w-full justify-center ">
          <label htmlFor="" className="w-1/3 text-white font-extrabold text-lg mr-5">Password : </label>
          <input type="password"  className="bg-white/30 backdrop-blur-2xl py-1.5 w-2/3 rounded-xl text-white"/>
        </div>

        <CusButton
        text='Sign Up'
        btnClass='bg-green-400 my-5'
        />
        <OauthButton  oauthClass='my-5'/>
      </div>
    </div> 
      }

     {toggleSignIn ? 
   <div className=" bg-white flex w-[80%] justify-center py-2">
   <p className="text-black font-extrabold text-lg">New User? </p> <button onClick={handleSignToggle} className="text-blue-600 underline hover:text-blue-700 font-semibold "> Sign up</button>
  </div>  : 
   <div className=" bg-white flex w-[80%] justify-center py-2">
   <p className="text-black font-extrabold text-lg">Exisiting User ? </p> <button onClick={handleSignToggle} className="text-blue-600 underline hover:text-blue-700 font-semibold "> Sign in</button>
  </div> 
     } 
    </div>
  )
}

