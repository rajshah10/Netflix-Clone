import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOGOUT } from "./constants"
import { auth, provider } from "./firebase";

export const login=()=>async dispatch=>{
    try{
        dispatch({
            type:LOGIN_REQUEST,
        })
        const res=await auth.signInWithPopup(provider);
        const accessToken=res.credential.accessToken;
        const profile={
            name:res.additionalUserInfo.profile.name,
            photoURL:res.additionalUserInfo.profile.picture,
        }
        sessionStorage.setItem("netf-access",accessToken);
        sessionStorage.setItem("netf-access-profile",JSON.stringify(profile))
        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })

        dispatch({
            type:LOAD_PROFILE,
            payload:profile
        })
       
    }
    catch(error)
    {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
        console.log(error.message)
    }
}