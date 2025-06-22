import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo copy.PNG";
import Camera from "../Assets/camera.PNG";
import { Link } from "react-router-dom"
const Navbar = () => {
  const [menu,setMenu]= useState ("Home")
  return (
    <div className="Navbar">

      <div className="Nav-logo">
        <img src={logo} alt="" width="50px" />
        <div>
        <p className="hi">BCL </p>
        <p className="hi">PHOTOGRAPHY </p>
        </div>
        
      </div>

      <div >
        <ul className="Nav-menu">
          <li onClick={()=>{setMenu("Home")}}><Link to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}  </li>
          <li onClick={()=>{setMenu("Frames")}}><Link to='/frames'>Frames</Link>{menu==="Frames"?<hr/>:<></>} </li>
          <li onClick={()=>{setMenu("Gifts")}}><Link to='/gifts'>Gifts</Link>{menu==="Gifts"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Shoots")}}><Link to='/shoots'>Shoots</Link>{menu==="Shoots"?<hr/>:<></>} </li>
        </ul>
       </div>

        <div className="login">
          <Link to='/login' ><button>Login</button></Link>
          <Link to='/cart'><img src={Camera} alt="" height="50px"/></Link>
          <div className="cart-count">0</div>
        </div>


    </div>
  );
};

export default Navbar;
