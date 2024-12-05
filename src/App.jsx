import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useHistory } from 'react-router-dom';

import './App.css'
import Home from './components/Home'
import Success from './components/Success'
import OrderPizza from "./components/OrderPizza"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderPart from './components/HeaderPart';

function App() {
 const [orderedData,setorderedData]=useState(null);

 const handleOrder=(s)=>{
  setorderedData(s)
 }

  return (
    <Router>
      <Switch>
      <Route exact path="/" >

        <HeaderPart />
      </Route>
      <Route path="/siparis-olustur">
    <OrderPizza onSubmit={handleOrder}/>
      </Route>
      <Route path="/siparis-alindi">
        <Success orderedData={orderedData}  />
      </Route >
      </Switch>
    </Router>
    
   
  )
}

export default App
