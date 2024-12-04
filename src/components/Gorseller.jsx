import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import pizza1 from "../../Assets/Iteration-2-aseets/pictures/food-1.png";
import pizza2 from "../../Assets/Iteration-2-aseets/pictures/food-2.png"
import burger1 from "../../Assets/Iteration-2-aseets/pictures/food-3.png"


import "./Gorseller.css"
function Gorseller() {
  return (
    <div className='cards'>
    <Card 
 
>
  <img
    alt="Sample"
    src={pizza1}
  />
  <CardBody>
    <CardTitle tag="h5">
    Terminal Pizza
    </CardTitle>
    <CardSubtitle
      className="card-subtitle"
      tag="h6"
    >
     <p>4.9 </p><p>(200)</p><p>60₺</p>
    </CardSubtitle>
    
  </CardBody>
</Card>
<Card
 
>
  <img
    alt="Sample"
    src={pizza2}
  />
  <CardBody>
    <CardTitle tag="h5">
    Position Absolute Acı Pizza
    </CardTitle>
    <CardSubtitle
       className="card-subtitle"
      tag="h6"
    >
    <p>4.9 </p><p>(928)</p><p>85₺</p>
    </CardSubtitle>
   
   
  </CardBody>
</Card>
<Card
 
>
  <img
    alt="Sample"
    src={burger1}
  />
  <CardBody>
    <CardTitle tag="h5">
    useEffect Tavuklu Burger    </CardTitle>
    <CardSubtitle
       className="card-subtitle"
      tag="h6"
    >
     <p>4.9 </p><p>(462)</p><p>75₺</p>
    </CardSubtitle>
    
  </CardBody>
</Card>
</div>
    
  )
}

export default Gorseller