import React from 'react'

import koreLogo from "../../Assets/Iteration-2-aseets/icons/1.svg";
import pizza from "../../Assets/Iteration-2-aseets/icons/2.svg";
import burger from "../../Assets/Iteration-2-aseets/icons/3.svg";
import kızartma from "../../Assets/Iteration-2-aseets/icons/4.svg";
import fastfood from "../../Assets/Iteration-2-aseets/icons/5.svg";
import gazliIcecek from "../../Assets/Iteration-2-aseets/icons/6.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FirstMenu.css"


import {  
  Navbar,
  NavbarBrand,
  NavLink,
} from 'reactstrap';

function FirstMenu() {
  
  return (

    <>
    <div className='first-menu-container'>
    <Navbar>
        <NavbarBrand href="">
            <img src={koreLogo} alt="" />
            YENİ! Kore</NavbarBrand>
        <NavbarBrand href=""><img src={pizza} alt="" />Pizza</NavbarBrand>
        <NavbarBrand href=""> <img src={burger} alt="" /> Burger</NavbarBrand>
        <NavbarBrand href=""><img src={kızartma} alt="" />Kızartmalar</NavbarBrand>
        <NavbarBrand href=""><img src={fastfood} alt="" />Fast Food</NavbarBrand>
        <NavbarBrand href=""><img src={gazliIcecek} alt="" />Gazlı İçecek</NavbarBrand>

        
      </Navbar>
    </div>
    
    </>
  )
}

export default FirstMenu