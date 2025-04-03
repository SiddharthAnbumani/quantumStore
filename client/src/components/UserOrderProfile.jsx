import { useState } from "react";
import UserOrderDetails from "./UserOrderDetails";

export default function ProductProfile({ title, description, id}) {
    const [isViewOrder, setIsViewOrder] = useState(false);
    
    return (
        <div className="relative">
            <div className="w-70 h-80 bg-white/30 backdrop-blur-3xl border-1 rounded-4xl flex flex-col items-center justify-center relative">
                <h1 className="text-2xl font-bold py-3 px-2 text-center text-white">{title}</h1>
                <img 
                    src="/placeholder.webp" 
                    alt="" 
                    className="self-center m-2 h-[60%] w-[50%] border-1 rounded-xl" 
                />
                <p className="text-md font-semibold text-center text-white">{description}</p>
                <div className="flex justify-center items-center">
                    <button  
                        className='font-bold text-white bg-violet-600 py-2 px-10 
                        rounded-3xl m-2 hover:scale-110 transition-all duration-100' 
                        onClick={() => setIsViewOrder(true)}
                    >
                        View Details
                    </button>
                </div>
            </div>
            
            {isViewOrder && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white backdrop-blur-3xl p-6 rounded-2xl shadow-lg w-[90%] h-[90%] relative flex flex-col items-center justify-center overflow-auto">
                        <UserOrderDetails />
                        <button 
                            className=" my-5 bg-red-500 px-10 py-2 rounded-3xl text-xl font-bold text-black hover:scale-110 transition-all duration-150" 
                            onClick={() => setIsViewOrder(false)}
                        >
                            Back to Orders
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// import { useState } from "react";
// import UserOrderDetails from "./UserOrderDetails";

// export default function ProductProfile({ title, description, id}) {

//     const [isViewOrder, setISViewOrder] = useState(false)
    
//   return (
//     <div className="">
//     <div className="w-70 h-80 bg-white/30 backdrop-blur-3xl border-1 rounded-4xl flex flex-col items-center justify-center relative">
//       <h1 className="text-2xl font-bold py-3 px-2 text-center text-white">{title}</h1>

//       <img 
//         src="/placeholder.webp" 
//         alt="" 
//         className="self-center m-2 h-[60%] w-[50%] border-1 rounded-xl" 
//       />

//       <p className="text-md font-semibold text-center text-white ">{description}</p>
//         <div className="flex justify-center items-center">
//             <button  
//             className='font-bold text-white bg-violet-600 py-2 px-10 
//             rounded-3xl m-2 hover:scale-110 transition-all duration-100' 
//             onClick={(prev)=> setISViewOrder(!isViewOrder)}
//             >
//             View Details
//             </button>
//         </div>
//     </div>
    
//     { isViewOrder && 
//     <div className=""> 
//     <UserOrderDetails/>
//     </div>} 
//     </div>
   
//   );
// }


