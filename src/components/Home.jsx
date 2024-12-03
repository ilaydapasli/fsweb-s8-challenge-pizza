import React,{useEffect} from 'react';
import Logos  from "../assets/logo.svg";
import "./Home.css"
import { useHistory } from 'react-router-dom';
export default function Home(){
   
  const history = useHistory();

    const handleButton = () => {
        history.push("/siparis-olustur")
    }
    
    useEffect(() => {
        document.body.className = "home-body";
      }, []);
    
    return (
        <>
        <div className='main-titleandlogo'>
      <img src={Logos} alt="Logo" />
    <h1 className='main-title'>KOD ACIKTIRIR <br /> PİZZA DOYURUR</h1>
    <button type='submit' className='anasayfa-buton' onClick={handleButton} >ACIKTIM</button>
    </div>
        </>
    )
}