import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer"><div className="footer-column">
    
   <div> <h3>Contact Information</h3>
    <p>Email: <a href="mailto:info@huzefaengineering.com">info@huzefaengineering.com</a></p>
    <p>Phones: +92 32550551-52</p>
    <p>Office: B9-B1, SP Chambers, Suite# 14</p>
    <p> S.I.T.E., Karachi.</p>
    <p>Factory: E-146-147, H.I.T.E., Hub, Balochistan</p></div><div>
    <a href="https://www.linkedin.com/company/96448348" target="_blank" rel="noopener noreferrer" >
 <img src='/image/linkedico.png' alt="Logo" className="footerlogo" />
</a>
<a href="https://www.facebook.com/p/HUZEFA-ENGINEERING-SERVICES-100063598717121/?paipv=0&eav=AfZHrqphuDzk7ev3vdCGDo-YR4xl7yzGByW0AUz57Z5vuMAf70PbvBS6slUfZKkNLEA&_rdr" target="_blank" rel="noopener noreferrer" >
 <img src='/image/facebookico.png' alt="Logo" className="footerlogo" />
</a>
<a href='https://wa.me/14034012929' target="_blank" rel="noopener noreferrer" >
 <img src='/image/whatsappico.png' alt="Logo" className="footerlogo" />
</a>
<a href="https://www.linkedin.com/company/96448348" target="_blank" rel="noopener noreferrer" >
 <img src='/image/twitterico.png' alt="Logo" className="footerlogo" />
</a>
</div> </div>
      
      <div className="footer-column">
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/heatexchanger">Heat Exchangers</a>
          </li>
          <li>
            <a href="/gratings">Gratings</a>
          </li>
          <li>
            <a href="/storage">Storage Tank</a>
          </li>
          <li>
            <a href="/bulkmovement">Bulk Movement</a>
          </li>
          <li>
            <a href="/prefab">Pre-Fabricated</a>
          </li>
          <li>
            <a href="/portable">Portable Offices</a>
          </li>
          <li>
            <a href="/shopinshop">ShopInShop</a>
          </li>
          <li>
            <a href="/contactus">Contact Us</a>
          </li>
          {/* Add more links */}
        </ul></div>
      </div>
      <div className="footer-column">
        
        <h3>Our Office</h3>
        <iframe
      title="My Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.1647155875858!2d67.01018679693989!3d24.910413593319888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f6ca62e9251%3A0x66cad6e9f1d31d27!2sHuzefa%20Engineering%20Services!5e0!3m2!1sen!2s!4v1694597734385!5m2!1sen!2s"
      width="400"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
        <p>B9-B1, SP Chambers, Suite# 14,</p>
        <p> S.I.T.E., Karachi.</p>
      </div>
    </footer>
  );
};

export default Footer;
