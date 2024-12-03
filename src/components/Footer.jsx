
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png'; 
export default function Footer(){
    return (
        <>
        <footer className="main-footer">
        <div className="footer-column">
        <h1>Teknolojik <br /> Yemekler</h1>
            <ul>
                <li><img src="https://www.figma.com/file/q0xPW5uCel3rdzFgpjR9lt/image/090844d1bf8ba15bccac8d589cd96d428c644077" alt="" />341 Londonderry Road,
                Istanbul Türkiye</li>
                <li><img src="https://www.figma.com/file/q0xPW5uCel3rdzFgpjR9lt/image/9fffc412dba32836ccb7135781a5ffed3a177067" alt="" />aciktim@teknolojikyemekler.com</li>
                <li><img src="https://www.figma.com/file/q0xPW5uCel3rdzFgpjR9lt/image/5bcf42e8cf44624c37cb7290e61fd24e95f5f71c" alt="" />+90 216 123 45 67</li>
            </ul>
        </div>
        <div className='footer-sutun'>
                <h3>Sıccacık Menüler</h3>
                <ul>Terminal Pizza</ul>
                <ul>5 Kişilik Hackathlon Pizza</ul>
                <ul>useEffect Tavuklu Pizza</ul>
                <ul>Beyaz Console Frosty</ul>
                <ul>Testler Geçti Mutlu Burger</ul>
                <ul>Position Absolute Acı Burger</ul>
            </div>
            <div className="footer-sutun">
            <ul><img src={img1} alt="" /><img src={img2} alt="" /><img src={img3} alt="" /></ul><br />
            <ul><img src={img4} alt="" /><img src={img5} alt="" /><img src={img6} alt="" /></ul>
            </div>
            <footer className="alt-footer">
            <p>© 2023 Teknolojik Yemekler.</p>
            </footer>
        </footer>
        
        
        
        
        </>
    )
}