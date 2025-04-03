import { NavLink } from "react-router-dom"
import BuyerLogin from "./LoginSignForm"
export default function SignLogin(){
    return (
        // <div className="w-screen h-screen flex flex-col justify-center items-center">

        //     <NavLink to='/vendor-login' className="bg-green-400 rounded-3xl text-white font-bold px-10 py-2 hover:scale-110 transition-all duration-150 my-2"> Vendor Login</NavLink>
        //     <NavLink to='/buyer-login' className="bg-red-500 rounded-3xl text-white font-bold px-10 py-2 hover:scale-110 transition-all duration-150 my-2"> Buyer Login in</NavLink>
        // </div>
        <div className="h-screen w-full flex justify-center items-center">
            <BuyerLogin/>
        </div>
    )
}