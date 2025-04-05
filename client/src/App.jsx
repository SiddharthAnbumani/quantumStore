
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import AllProducts from "./pages/AllProducts"
import Navbar from "./components/Navbar"
import './index.css'
import MakeProduct from "./pages/MakeProduct"
import EditProduct from "./pages/EditProduct"
import IndividualProduct from "./pages/IndividualProduct"
import Cart from './components/Cart'
import { useState } from "react"
import UserProfile from "./pages/UserProfile"
import UserOrders from "./pages/UserOrders"
import ProfileOption from "./components/ProfileOption"
import ErrorPage from "./pages/ErrorPage "
import SignLogin from "./pages/SignLogin"


export default function App(){
  const [isActive,setIsActive] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false)


  return (
    <div className="">
    <BrowserRouter className=''>


    <Navbar
     isActive={isActive}
     setIsActive={setIsActive}
     profileIsOpen={profileIsOpen}
    setProfileIsOpen={setProfileIsOpen}
     />

    <Cart 
    isActive={isActive}
    setIsActive={setIsActive}/>
    <ProfileOption 
    profileIsOpen={profileIsOpen}
    setProfileIsOpen={setProfileIsOpen}

    />

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/makeproduct" element={<MakeProduct/>} />
        <Route path="/edit-product/:productId" element={<EditProduct/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/allproducts/:productId" element={<IndividualProduct/>} />
        <Route path="/allproducts" element={<AllProducts/>} />

        <Route path="/login" element={<SignLogin/>} />

        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/profile/orders" element={<UserOrders/>} />
        <Route path="*" element={<ErrorPage/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}
