export default function OauthButton({onClick,oauthClass}){
    return (
        <button className= {` bg-black rounded-4xl flex px-10 py-2 items-center justify-between w-[350px] hover:scale-110 transition-all duration-200 ${oauthClass}`} onClick={onClick} >
            <span className="w-4/12">
                <img src="/g-icon.webp" alt=""  className="rounded-4xl w-14 h-11"/>
            </span>
            <p className="w-8/12 text-lg font-bold text-white">Sign With Google </p>
        </button>
    )
}