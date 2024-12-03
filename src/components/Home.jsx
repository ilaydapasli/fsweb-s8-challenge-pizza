import React,{useEffect} from 'react';
import Logos  from "../assets/logo.svg";
import "./Home.css"
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';


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
      <div className='cards'>
    <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://www.figma.com/file/q0xPW5uCel3rdzFgpjR9lt/image/d864d5f2cfeae804c5416af75c83724fea1e8a2a"
  />
  <CardBody>
    <CardTitle tag="h5">
    Terminal Pizza
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     <p>4.9 </p><p>(200)</p><p>60₺</p>
    </CardSubtitle>
    
  </CardBody>
</Card>
<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://www.figma.com/file/q0xPW5uCel3rdzFgpjR9lt/image/b4eff9b1a666a9eaf37b96abc3aa028f58013324"
  />
  <CardBody>
    <CardTitle tag="h5">
    Position Absolute Acı Pizza
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    <p>4.9 </p><p>(928)</p><p>85₺</p>
    </CardSubtitle>
   
   
  </CardBody>
</Card>
<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://www.figma.com/file/q0xPW5uCel3rdzFgpjR9lt/image/458e326ccd5af55f8af508250a5509f485252911"
  />
  <CardBody>
    <CardTitle tag="h5">
    useEffect Tavuklu Burger    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     <p>4.9 </p><p>(462)</p><p>75₺</p>
    </CardSubtitle>
    
  </CardBody>
</Card>
</div>
    <Footer></Footer>
        </>
    )
}