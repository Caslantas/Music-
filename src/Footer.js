import React, { useState } from 'react';
import Contact from './Contact';



const Footer = () => {
    const [ isModal, setİsModal]=useState(false)
    const handleClick=()=>{
        setİsModal(!isModal)
    }
   return (
      <footer className="footer">
      {isModal && <Contact onClose={handleClick}/>}
         <div className="footer-content">
            <p>&copy; 2023 Müzikal Başlık</p>
            <a href="/">Veri Politikası</a>
            <a href='/'>Gizlilik Bildirimi</a>
            <button onClick={handleClick} style={{border:'none',color:'#fff',backgroundColor:'#000'}}>Bize Ulaşın</button>
         </div>

        
      </footer>
   );
}

export default Footer;
