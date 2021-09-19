import React from 'react'
import { Link } from 'react-router-dom'
import "./signin.css"
const SignIn = () => {
    return (
        <header class="showcase">
            <Link to="/"> 
                <div className="logo">
                    <img src="https://i.ibb.co/r5krrdz/logo.png"/>
                </div>
            </Link>

            <div className="showcase-content">
                <div className="formm">
                    <form>
                        <h1>Sign In</h1>
                        <div className="info">
                            <input class="email" type="email" placeholder="Email or phone number"/> <br/>
                            <input class="email" type="password" placeholder="Password"/>
                        </div>
                        <div className="btn">
                            <button class="btn-primary" type="submit">Sign In</button>
                        </div>
                        <div class="help">
                            <div>
                                <input value="true" type="checkbox"/><label>Remember me</label>
                            </div>

                            <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
                        
                        </div>

                    </form>
    
                </div>
                
                <div className="fcbk">
                    <a href="https://facebook.com">
                        <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
                      </a>
                    <p>Login with Facebook</p>
                </div>
                <div className="signup">
                    <p>New to Netflix ?</p>
                    <Link to={"/login"}>Sign up now</Link>
                </div>
                <div className="more">
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> 
                    </p>
                </div>

            </div>
       
    </header>

    )
}

export default SignIn
