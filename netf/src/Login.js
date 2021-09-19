import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import {useDispatch,useSelector} from "react-redux"
import "./login.css"
import { login } from './auth.actions'
import createHistory from 'history/createBrowserHistory'

const Login = () => {
    const dispatch=useDispatch();
    const history=useHistory()
    const accessToken=useSelector(state=>state.auth.accessToken)
  

    const handleAuth=()=>{
        dispatch(login())
    }
    useEffect(() => {
       if(accessToken){
          
            history.push('/')
       if(window.localStorage)
        {
            if(!localStorage.getItem('firstLoad') )
            {
            localStorage['firstLoad'] = true;
            window.location.reload();
            }  
            else
            localStorage.removeItem('firstLoad');
        }
       }
    }, [accessToken,history])
    return (
        <div className="bodyContainer">
            <div class="navbar">
               <Link to="/"> <li class="logo">
                    <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Netflix-Logo-PNG-image-200x200.png"/></li>
                </Link>    
               <Link to="/authenticate"> <li class="buttons">Sign In</li> </Link>
            </div>
            <div class="main">
                <div class="area">
                    <h1>Unlimited movies, TV <br/>shows, and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.
                        </h3>
                    
                        <div onClick={handleAuth}class="search1">
                        <span class="try">
                             Try 30 days free <i class="fas fa-chevron-right"></i>
                        </span>
                </div>
             <h4>Ready to watch? Enter your email to create or access your account </h4>
            </div>
           
        </div>
        </div>
    )
}

export default Login
