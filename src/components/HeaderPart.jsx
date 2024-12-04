import React from 'react'
import background from "../../Assets/Iteration-1-assets/home-banner.png"
import logo from "../../Assets/Iteration-1-assets/logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './HeaderPart.css'
import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import Footer from './Footer';
import FirstMenu from './FirstMenu';
import SiparisKart from './SiparisKart';


function HeaderPart() {

    const history = useHistory();

    const handleButton = () => {
        history.push("/siparis-olustur")
    }
  return (
    <>
    <div className='header-container'>
    <div className='headerPart-img' style={{  backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover', // Görselin tüm alanı kaplaması
    width: '100vw', // Tam genişlik
    height: '100vh', // Tam yükseklik
  }}>
        <div className='header-text'>
            <img src={logo} alt="" />
         <p className="p-yellow">Fırsatı Kaçırma</p>
          <p className="p-white">KOD ACIKTIRIR,</p>
          <p className="p-white">PİZZA DOYURUR</p>
          <Button className='button' onClick={handleButton}
            color="warning">
                Acıktım 
                 </Button>
                 </div>


    </div>
  
    
    </div>
    <FirstMenu />
    <SiparisKart />
  <Footer />
    </>
  )
}

export default HeaderPart