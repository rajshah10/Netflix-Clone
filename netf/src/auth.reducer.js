import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./constants"

const initialState={
    accessToken:sessionStorage.getItem('netf-access-profile')?JSON.parse(sessionStorage.getItem('netf-access-profile')):null,
    user:sessionStorage.getItem('netf-access')?sessionStorage.getItem('netf-access'):null,
    loading:false
}
export const authReducer=(prevState=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...prevState,
                loading:true
            } 
        case LOGIN_SUCCESS:
            return{
                ...prevState,
                accessToken:action.payload,
                loading:false
            }   
        
        case LOAD_PROFILE:
            return{
                ...prevState,
                user:action.payload
            }    

         case LOGIN_FAIL:
             return{
                 ...prevState,
                 accessToken:null,
                 loading:false,
                 error:action.payload
             }  
          case LOGOUT:
              return{
                  ...prevState,
                  accessToken:null,
                  user:null,
                  loading:false
              }   
         default:
             return prevState     
    }
}