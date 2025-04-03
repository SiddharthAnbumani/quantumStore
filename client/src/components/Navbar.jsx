import { NavLink } from "react-router-dom";

export default function Navbar({isActive,setIsActive,profileIsOpen,setProfileIsOpen}) {
    const handleToggle = ()=> {
    setIsActive(!isActive)
    }

  return (
<div className="fixed top-1 left-1 right-1 w-full bg-black/70 backdrop-blur-3xl text-lg text-white p-3 rounded-2xl flex justify-between z-50">

      <ul className="font-extrabold w-4/12 flex justify-center items-center">
        <li className="transition-all duration-200 hover:scale-110">
          <NavLink to='/'>
          QuantumStore
          </NavLink>
        </li>
      </ul>

      <ul className="flex font-extrabold w-8/12 justify-evenly items-center">
        <li className="hover:scale-110">
          <NavLink to='/home'>
            Home
          </NavLink>
        </li>

        <li className="hover:scale-110">
          <NavLink to='/allproducts'>
            Products
          </NavLink>
        </li>


        <li className="hover:scale-110">
          <NavLink to='/login'>
            Login
          </NavLink>
        </li>

        <li className="hover:scale-110 flex items-center justify-center">
          <button className="rounded-4xl" onClick={handleToggle}>
          <img src="/cart2.jpeg" alt="" className="w-[30px] h-[30px] rounded-4xl"/>
          </button>
        </li>
      
        <li className="hover:scale-110 flex items-center justify-center">
          <NavLink to='/profile' className="rounded-4xl">
          <img src="/user.png" alt="" className="w-[30px] h-[30px] rounded-4xl"/>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
