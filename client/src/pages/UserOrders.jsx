import UserOrderProfile from '../components/UserOrderProfile'

export default function UserOrders(){
    
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-[80%] h-full bg-black/80 m-20  rounded-4xl backdrop-blur-3xl">
                <h1 h1 className="text-5xl font-extrabold text-white text-center my-5">Your Orders </h1>
                <div className="grid grid-cols-3 justify-items-center space-y-5 my-10">
                    <UserOrderProfile/>
                    <UserOrderProfile/>
                    <UserOrderProfile/>
                    <UserOrderProfile/>
                    <UserOrderProfile/>
                    <UserOrderProfile/>
                </div>
            </div>
        </div>
    )
}