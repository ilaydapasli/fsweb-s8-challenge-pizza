import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzaBack from "../../Assets/Iteration-2-aseets/cta/kart-1.png";
import burgerBack from "../../Assets/Iteration-2-aseets/cta/kart-2.png";
import motoBack from "../../Assets/Iteration-2-aseets/cta/kart-3.png";
import "./SiparisKart.css"
import Gorseller from './gorseller';
function SiparisKart() {
    document.body.style.backgroundColor = "beige";

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
      <Button className='siparis-ver-button'>
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
      <Button className='siparis-ver-button'>
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
      <Button className='siparis-ver-button'>
        SİPARİŞ VER
      </Button>
    </CardImgOverlay>
  </Card>

  </div>

    </div>
    </div>
    </div>

    <Gorseller />
   </>
  )
}

export default SiparisKart