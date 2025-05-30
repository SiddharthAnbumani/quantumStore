export default function Input({type, name, id, placeholder,label ,labelClass,inputClass,value,eventHandler}){
    return (
        <div className="flex items-center space-x-10 justify-center">
            <div className="1/3">
                <label className={`font-extrabold  text-white ${labelClass}`} htmlFor={id}> {label} : </label>
            </div>

            <div className="w-2/3">

                <input 
                className={`bg-white my-3 px-10 py-2 rounded-2xl ${inputClass}`} 
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                value={value}
                onChange={eventHandler}
                />

            </div>
        </div>
    )
} 