import React, { useEffect, useState } from 'react';
import './orderPizza.css';
import logo from "../assets/logo.svg"

function PizzaOrderForm() {
  const [size, setSize] = useState('Küçük');
  const [dough, setDough] = useState('Hamur Kalınlığı');
  const [extras, setExtras] = useState({
    sos: false,
    pepperoni: false,
    sucuk: false,
    mısır: false,
    domates: false,
    ananas: false,
  });
  const [orderNote, setOrderNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleExtrasChange = (event) => {
    const { name, checked } = event.target;
    setExtras((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  useEffect(() => {
    document.body.className = "order-body";
  }, []);

  const handleNoteChange = (event) => {
    setOrderNote(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleDoughChange = (event) => {
    setDough(event.target.value);
  };

  const calculateTotal = () => {
    let total = 85.50;

    if (size === 'Orta') total += 5;
    if (size === 'Büyük') total += 10;

    if (extras.sos) total += 2;
    if (extras.pepperoni) total += 3;
    if (extras.sucuk) total += 3;
    if (extras.mısır) total += 1;
    if (extras.domates) total += 1;
    if (extras.ananas) total += 2;

    return total * quantity;
  };

  return (
    <>
    <header className='header-order'>
        <img src={logo} alt="" />
        <div> 
            <a href="">Anasayfa</a>
            <a href="">Seçenekler</a>
            <a href="">Sipariş Oluştur</a>
           
         </div>
         </header>
    <div>
        
        <h3>Position Absolute Acı Pizza</h3>

        <p><span>85.50 ₺</span></p>
        <p>4.9</p>
        <p>(200)</p>
    </div>
    <div className='pizza-explain'>
        <p>Frontent Dev olarak hala positicn:absolute kullanıyorsan bu çok acı pizza tam sana
göre. Pizza, domates. peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha
sonra geleneksel olarak odun ateşi ide bir fırında yüksek sıcaklıkta pişirilen,
genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
    </div>

  
    <div className="pizza-order-form">
      <h3>Boyut Seç</h3>
      <label>
        Küçük
        <input
          type="radio"
          name="size"
          value="Küçük"
          checked={size === 'Küçük'}
          onChange={handleSizeChange}
        />
      </label>
      <label>
        Orta
        <input
          type="radio"
          name="size"
          value="Orta"
          checked={size === 'Orta'}
          onChange={handleSizeChange}
        />
      </label>
      <label>
        Büyük
        <input
          type="radio"
          name="size"
          value="Büyük"
          checked={size === 'Büyük'}
          onChange={handleSizeChange}
        />
      </label>

      <h3>Hamur Seç</h3>
      <select value={dough} onChange={handleDoughChange}>
        <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
        <option value="İnce">İnce</option>
        <option value="Kalın">Kalın</option>
      </select>

      <h3>Ek Malzemeler</h3>
      <label>
        Sos
        <input
          type="checkbox"
          name="sos"
          checked={extras.sos}
          onChange={handleExtrasChange}
        />
      </label>
      <label>
        Pepperoni
        <input
          type="checkbox"
          name="pepperoni"
          checked={extras.pepperoni}
          onChange={handleExtrasChange}
        />
      </label>
      <label>
        Sucuk
        <input
          type="checkbox"
          name="sucuk"
          checked={extras.sucuk}
          onChange={handleExtrasChange}
        />
      </label>
      <label>
        Mısır
        <input
          type="checkbox"
          name="mısır"
          checked={extras.mısır}
          onChange={handleExtrasChange}
        />
      </label>
      <label>
        Domates
        <input
          type="checkbox"
          name="domates"
          checked={extras.domates}
          onChange={handleExtrasChange}
        />
      </label>
      <label>
        Ananas
        <input
          type="checkbox"
          name="ananas"
          checked={extras.ananas}
          onChange={handleExtrasChange}
        />
      </label>

      <h3>Sipariş Notu</h3>
      <textarea
        value={orderNote}
        onChange={handleNoteChange}
        placeholder="Siparişinize eklemek istediğiniz notu buraya yazın."
      />

      <div className="quantity-buttons">
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <div className="order-summary">
        <p>Sipariş Toplamı: <span className="siparis-toplam">{calculateTotal()} ₺</span></p>
        <button className="order-button">Siparişi Ver</button>
      </div>
    </div>
    </>  );
}

export default PizzaOrderForm;
