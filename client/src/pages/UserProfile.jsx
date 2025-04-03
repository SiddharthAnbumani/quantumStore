import { NavLink } from 'react-router-dom';
import CusButton from '../components/cusButton';

export default function UserProfile() {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="w-[80%] h-[90%] bg-black/80 mt-20 mb-10 rounded-2xl flex flex-col items-center justify-evenly p-10 backdrop-blur-3xl">
                <div className="w-40 h-40 flex items-center justify-center">
                    <img src="user.png" alt="User" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center w-full space-y-4">
                    <h1 className="text-5xl font-extrabold text-white text-center">User: User_name</h1>
                    <p className="text-3xl font-extrabold text-white text-center">Role: Customer / Vendor</p>
                    <p className="text-3xl font-extrabold text-white text-center">Email: user_name@gmail.com</p>
                    <p className="text-3xl font-extrabold text-white text-center">Contact: +91 XXXXXXXXXX</p>
                </div>
                <NavLink to='/profile/orders' 
                    className='text-white text-2xl font-bold bg-blue-700 px-16 py-2 rounded-2xl hover:scale-110 transition-transform duration-200'>
                    View Orders
                </NavLink>
            </div>
        </div>
    );
}

// import { NavLink } from 'react-router-dom'
// import CusButton from '../components/cusButton'

// export default function UserProfile(){
//     return (
//         <div className="flex items-center justify-center h-screen w-screen">
//             <div className="w-[80%] h-[90%] bg-black/80 mt-20 mb-10 rounded-2xl flex flex-col items-center justify-evenly">
//                 <div className=" flex items-center justify-center w-1/3">
//                     <img src="user.png" alt="" />
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-2/3 space-y-3">
//                     <div className="">
//                         <h1 className="text-5xl font-extrabold text-white"> User : User_name</h1>
//                     </div>
//                     <div className="">
//                         <p className="text-3xl font-extrabold text-white">Role : Customer / Vendor</p>
//                     </div>
                    
//                     <div className="">
//                         <p className="text-3xl font-extrabold text-white">Email: user_name@gmail.com</p>
//                     </div>
//                     <div className="">
//                         <p className="text-3xl font-extrabold text-white">Contact : +91 XXXXXXXXXX</p>
//                     </div>
//                 </div>
//                 <div className="">
//                     {/* <CusButton text='View Orders'
//                     btnClass='bg-blue-700 w-full px-10 py-2 text-white'
//                     /> */}
//                     <NavLink to='/profile/orders' 
//                     className='text-white text-lg font-bold bg-blue-700 px-10 py-2 rounded-2xl hover:scale-110 transition-all duration-150'>
//                     View Orders
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }
