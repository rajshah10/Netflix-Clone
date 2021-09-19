import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Nav.css";
import {Button, makeStyles, Menu, MenuItem, Typography} from '@material-ui/core';

import { useDispatch } from 'react-redux'
import {useSelector} from "react-redux"
import { LOGOUT } from './constants';
import { auth } from './firebase';
const useStyle=makeStyles({
    login: {
        color: '#2874f0',
        background: 'red',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 29,
        boxShadow: 'none',
        '&:hover':{
            backgroundColor: '#E50914',
        },
    },
    component: {
        marginTop: 40,
        width:180
    },
    logout: {
        fontSize: 14,
       
    }
})
const Nav = () => { 
    //CSS
    const classes=useStyle()
    //HOOKS
  
    const [show,handleShow]=useState(false);
    const [search,setSearch]=useState("");
    const [menu,setMenu]=useState(false);
    const dispatch = useDispatch();
    const history=useHistory();
    //SELECTORES
    const profile=useSelector(state=>state.auth.accessToken)
    const user=useSelector(state=>state.auth.user)
    //FUNCTIONS
    const handleSubmit=()=>{
        history.push(`/search/${search}`);
    }
    const transitionNavbar=()=>
    {
        if(window.scrollY>100)
        {
            handleShow(true);
        }
        else
        {
            handleShow(false);
        }
    }
    const handleClick = (event) => {
        setMenu(event.currentTarget);
      };
    const handleClose=()=>{
        setMenu(false)
    }  
    const logout=()=>{
        dispatch({
            type:LOGOUT
        })
        auth.signOut().then(()=>{
            sessionStorage.removeItem("netf-access")
            sessionStorage.removeItem("netf-access-profile")
            history.push("/")
            handleClose()
        })
    }
useEffect(() => {
    window.addEventListener("scroll",transitionNavbar);
    return()=>window.removeEventListener('scroll',transitionNavbar)
    
}, [profile])
    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className="nav__contents">
                <Link to ={`/`}><img className="nav__logo" src="https://www.searchpng.com/wp-content/uploads/2019/02/Netflix-Logo-PNG-image-200x200.png"alt="netflix"/></Link>
                  <div className="list">
                  <ul>
                      <li><Link className="allinks" to="/">Home</Link></li>
                      <li><Link className="allinks"to="/movies">Movies</Link></li>
                      <li><Link className="allinks"to="/series">Series</Link></li>
                      <li><Link className="allinks"to="/playlist">Playlist</Link></li>
                  </ul>
                  </div>
                  {
                      profile ? 
                      
                        <div className="login-btn">
                       
                        </div>
                     :

                     <Link to="/authenticate">
                        <div className="login-btn">
                            <Button variant="contained"  className={classes.login}><span style={{color:"white"}}>Login</span></Button>
                        </div>
                     </Link>
                  }
                  
                  <div className="search">
                      <form onSubmit={handleSubmit}>
                          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search movie" />
                      </form>
                  </div>
                <img onClick={handleClick} className="nav__avatar" src={profile?.photoURL}/>
                <Menu
                     className={classes.component}
                    anchorEl={menu}
                    open={Boolean(menu)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose,logout}>
                        <Typography className={classes.logout}>Logout</Typography>
                    </MenuItem>
                </Menu>
            </div>    
        </div>
    )
}

export default Nav
