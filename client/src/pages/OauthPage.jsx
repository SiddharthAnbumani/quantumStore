import Axios from 'axios'
import CusButton from '../components/cusButton'
import OauthButton from '../components/OauthButton';

export default function OauthPage(){

    const handleOauth = async()=>{
        try{
            window.location.href = "http://localhost:3000/auth/google/callback";
        }catch(error){
            console.log('Error', error)
        }
    }

    return (
        
            <div className="flex h-screen w-screen items-center justify-center">
            <OauthButton onClick={handleOauth}/>
            </div>
    )

}