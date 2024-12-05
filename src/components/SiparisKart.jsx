import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle, Navbar, NavbarBrand, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzaBack from "../../Assets/Iteration-2-aseets/cta/kart-1.png";
import burgerBack from "../../Assets/Iteration-2-aseets/cta/kart-2.png";
import motoBack from "../../Assets/Iteration-2-aseets/cta/kart-3.png";
import koreLogo from "../../Assets/Iteration-2-aseets/icons/1.svg";
import pizza from "../../Assets/Iteration-2-aseets/icons/2.svg";
import burger from "../../Assets/Iteration-2-aseets/icons/3.svg";
import kızartma from "../../Assets/Iteration-2-aseets/icons/4.svg";
import fastfood from "../../Assets/Iteration-2-aseets/icons/5.svg";
import gazliIcecek from "../../Assets/Iteration-2-aseets/icons/6.svg";
import "./SiparisKart.css"
import Gorseller from './gorseller';

function SiparisKart() {
    document.body.style.backgroundColor = "rgb(245, 245, 235)";

  return (
<>

<div className='card-main'>
   <div className='card-container'>
 <div className='card card-left' >
    <Card inverse>
    <CardImg
      alt="Card image cap"
      src={pizzaBack}
      style={{  backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
      }}
      
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
      Özel Lezzetus
      </CardTitle>
      <CardText>
      Position:Absolute Acı Burger
      </CardText>
      <Button href="/siparis-olustur" className='siparis-ver-button'>
        SİPARİŞ VER
      </Button>
    </CardImgOverlay>
  </Card>



    </div>
    <div className="card-container-right" >
    <div className="card card-right" >
    <Card inverse>
    <CardImg
      alt="Card image cap"
      src={burgerBack}
      style={{backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
      }}
      
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
      Hackathlon Burger Menu
      </CardTitle>
      <Button  href="/siparis-olustur" className='siparis-ver-button'>
        SİPARİŞ VER
      </Button>
      
    </CardImgOverlay>
  </Card>



    </div>
    <div className="card card-right" >
    <Card >
    <CardImg
      alt="Card image cap"
      src={motoBack}
      style={{backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      
      }}
      
    />
    <CardImgOverlay>
    <CardTitle tag="h5" className="mb-0 text-black">
                <span className="text-danger"> Çoooooook </span>hızlı
              </CardTitle>
              <CardTitle tag="h5" className=" text-black">
                npm gibi kurye
              </CardTitle>
      <Button  href="/siparis-olustur" className='siparis-ver-button'>
        SİPARİŞ VER
      </Button>
    </CardImgOverlay>
  </Card>

  </div>

    </div>
    </div>
    </div>
    <div className='siparis-text'>
    <span className="text-danger"> en çopk paketlenen menüler </span><br />
    <h1> Acıktıran Kodlara Doyuran Lezzetler</h1>
    </div>
    <div className='second-menu-container'>
    <Navbar>
        <NavbarBrand href="">
            <img src={koreLogo} alt="" />
            Ramen</NavbarBrand>
        <NavbarBrand href=""><img src={pizza} alt="" />Pizza</NavbarBrand>
        <NavbarBrand href=""> <img src={burger} alt="" /> Burger</NavbarBrand>
        <NavbarBrand href=""><img src={kızartma} alt="" />French fries</NavbarBrand>
        <NavbarBrand href=""><img src={fastfood} alt="" />Fast Food</NavbarBrand>
        <NavbarBrand href=""><img src={gazliIcecek} alt="" />Soft drinks</NavbarBrand>

        
      </Navbar>
      </div>
    <Gorseller />
   </>
  )
}

export default SiparisKart