import React, { useEffect, useState } from 'react';
import './orderPizza.css';
import axios from 'axios';
import logo from "../assets/logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button, FormText, FormFeedback } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import logo2 from "../../Assets/Iteration-2-aseets/pictures/form-banner.png"
import Footer from './Footer';

const initialData={
  boyut:"",
  hamur:"",
  ekMalzeme:[],
  siparişNotu:"",
  miktar:"",
}


const ekmalzeme=[
  { name: 'Pepperoni', label: 'Pepperoni' },
  { name: 'Sosis', label: 'Sosis' },
  { name: 'Kanada Jambonu', label: 'Kanada Jambonu' },
  { name: 'Tavuk Izgara', label: 'Tavuk Izgara' },
  { name: 'Soğan', label: 'Soğan' },
  { name: 'Domates', label: 'Domates' },
  { name: 'Mısır', label: 'Mısır' },
  { name: 'Sucuk', label: 'Sucuk' },
  { name: 'Jalepeno', label: 'Jalepeno' },
  { name: 'Sarımsak', label: 'Sarımsak' },
  { name: 'Biber', label: 'Biber' },
  { name: 'Ananas', label: 'Ananas' },
  { name: 'Kabak', label: 'Kabak' },

  
]
function PizzaOrderForm({onSubmit}) {
  const [form, setForm] = useState(initialData);
  const [count, setCount] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();
  document.body.style.backgroundColor = "white";

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    
    if (type === "checkbox") {
      let newMalzemeler = [...form.ekMalzeme];
      if(checked) {
        newMalzemeler.push(name);
      } else {
        newMalzemeler = newMalzemeler.filter((item) => item !== name);
      }
      setForm({...form, ekMalzeme: newMalzemeler});
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  function handleDecree(){
    if(count>1){
      setCount(count-1)
    }


  }
  function handleIncrease(){
    setCount(count+1)

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedForm = { ...form, miktar: count };
  
    axios
      .post('https://reqres.in/api/pizza', updatedForm)
      .then(response => {
        onSubmit(response.data);
        history.push("/siparis-alindi"); // Yönlendirme
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  

     return(
      <>
    
       <header className='header'>
        <img src={logo} alt="Logo" />
       
      </header>
      
      
       
          <div className='beige-area'>
          <section className='icerik-section'>
            <img src={logo2} alt="" />
        <nav>
        <a href="/">Anasayfa </a>
        <p>-</p>
        
        <a href="/secenekler">Seçenekler</a>
        <p>-</p>
        <a href="/siparis-olustur">Sipariş Oluştur</a>
        
        </nav>

        <h2>Position Absolute Acı Pizza</h2>
        <div className='pizzaInfo'>

        <h1 style={{color:"black"}}>85.50 ₺</h1>
            <p style={{marginLeft:"150px"}}>4.9</p>
            <p >(200)</p>
        </div>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
        </section>
        </div>
        
   
      <div className='form-main'>

      <Form className='order-pizza-form'>
      <section className='boyut'>
        
        <div className='form-row'>
        <div className='boyut-container'>
        <FormGroup >
        <Label>
                Boyut Seç*
              </Label>
        <FormGroup check>
              
              <Input name='boyut'
              type='radio'
              value="S"
              onChange={handleChange}
              />
              <Label>S</Label>

      </FormGroup>
      <FormGroup check>
      <Input name='boyut'
              type='radio'
              value="M"
              onChange={handleChange}
              />
              <Label>M</Label>

      </FormGroup>
      <FormGroup check>
      <Input name='boyut'
              type='radio'
              value="L"
              onChange={handleChange}
              />
              <Label>L</Label>

      </FormGroup>
      </FormGroup>
      </div>
        <div className='hamur-container'>
      <FormGroup >
        <Label>
                Hamur Seç*
              </Label>
              <Input id='hamurKalınlık'
              name='hamur'
              type='select'
              onChange={handleChange}
              >
                
              <option value="">--Hamur Kalınlığı Seç-- </option>
              <option value="İnce">İnce</option>
                  <option value="Orta">Orta</option>
                  <option value="Kalın">Kalın</option> 
</Input>
</FormGroup>
</div>
</div>


</section>

<section className='ekMalzeme'>
  <FormGroup check>
<Label>
  Ek Malzemeler
</Label><br />
<FormText>En fazla 10 malzeme seçebilirsiniz.5t</FormText>

  <br />
  <div className='malzeme-columns'>
  {ekmalzeme.map(malzeme => (
                <div className="material-item" key={malzeme.name}>
                  <Input type="checkbox" onChange={handleChange} name={malzeme.name} />
                  <Label check>{malzeme.label}</Label>
                </div>
                ))}
  </div>
  </FormGroup>
  
</section>

<FormGroup className='form-text-area'>
            <Label for="siparisNotu">Sipariş Notu</Label>
            <Input
              id="siparisNotu"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="text"
              onChange={handleChange}
              data-cy="siparis-notu" />
          </FormGroup>
                  <section className='odeme-container'>
                    <div className='sayac'>
                    <Button type='button' onClick={handleDecree}>-</Button>
                    <p className='sayac-value'>{count}</p>
                    <Button type='button' onClick={handleIncrease}>+</Button>

                    </div>

                    <div className='siparis-containet'>
                    <h2>Sipariş Toplamı</h2>
                    <div><p>Seçimler</p> <p>{form.ekMalzeme.length*5}</p></div>
                    <div><p>Toplam</p> <p>{(85.5*count)+(form.ekMalzeme.length*5)}</p></div>
                    <Button onClick={handleSubmit} size="lg" type='submit' >SİPARİŞ VER</Button>
                    
                    </div>

                  </section>
      </Form>
    
      </div>
      <Footer />
      </>
       
     )
}

export default PizzaOrderForm;
