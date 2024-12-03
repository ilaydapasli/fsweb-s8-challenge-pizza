
import Logos  from "../assets/logo.svg";
import "./Success.css"
import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';



export default function Success(){

    const history =useHistory();
   


    useEffect(() => {
        document.body.className = "success-body";
      }, []);
  
    return(

        <>
        <header className="success-page">
            <img src={Logos} alt="Logo" />
            <h1 className='main-title'>TEBRİKLER! <br />
            SİPARİŞ ALINDI</h1>
            </header>
            </>
    )
}