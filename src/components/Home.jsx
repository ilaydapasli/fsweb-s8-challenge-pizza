import React,{useEffect} from 'react';
import Logos  from "../assets/logo.svg";
import "./Home.css"
export default function Home(){
   

    
    useEffect(() => {
        document.body.className = "home-body";
      }, []);
    
    return (
        <>
        <div className='main-titleandlogo'>
      <img src={Logos} alt="Logo" />
    <h1 className='main-title'>KOD ACIKTIRIR <br /> PİZZA DOYURUR</h1>
    <button className='anasayfa-buton'  >ACIKTIM</button>
    </div>
        </>
    )
}