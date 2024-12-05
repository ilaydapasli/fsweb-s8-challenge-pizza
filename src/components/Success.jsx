
import Logos  from "../assets/logo.svg";
import "./Success.css"
import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Success({orderedData}){

    const history =useHistory();
   
    document.body.style.backgroundColor = "red";

   
  
    return(

        <>
        <div className="bg-main">
        <div className="success-page">
        <header >  <img src={Logos} alt="Logo" /> </header>
        <div className="head-texts"></div>
        <span className="lezzet-span" style={{color:"yellow"}}> lezzetin yolda </span><br />
        <h1> SİPARİŞ ALINDI</h1>
        
        <hr class="custom-line" />        
        </div>
        </div>
            </>
    )
}