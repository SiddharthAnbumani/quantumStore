import { useState } from 'react';
import UserProfile from '../pages/UserProfile';

export default function ProfileOption({ profileIsOpen, setProfileIsOpen }) {
    return (
        <>
            {profileIsOpen && (
                <div
                    className="fixed top-0 right-0 h-screen my-10 w-full bg-amber-50 rounded-l-3xl shadow-lg"
                    style={{ zIndex: 1000 }}
                >
                    <UserProfile />
                </div>
            )}
        </>
    );
}


// import {useState} from 'react'
// import UserProfile from '../pages/UserProfile'


// export default function ProfileOption({profileIsOpen, setProfileIsOpen}){

//     return (
//         <div className="">
//          {profileIsOpen && <div className="top-0 right-0 h-screen mt-40 w-full bg-amber-50 rounded-l-3xl">
//                 {/* <div className="flex items-center justify-evenly px-5 py-3 bg-amber-200">
//                     <img src="user.png" alt="" className="h-20 w-20" />
//                     <p className="font-extrabold text-2xl">Siddharth Anbumani</p>
//                 </div> */}

//                 <UserProfile/>

//             </div>}       
//         </div>
//     )
// }
