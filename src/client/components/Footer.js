import React from 'react';
import  "./Styles/Footer.css";
import logo from './Images/instagram.png';
import logo2 from './Images/facebook.png';
import logo3 from './Images/twitter.png';

export default function Footer() {
    return (
        <div className="footer_container">
            <div >
                <h3> Our Contacts</h3>
                <address>
                    Email: meal@gmail.com 
                    Phone: +45 91919191 
                    Opening hours: 9am - 10pm 
                    Copenhagen Street 27
                </address>
            </div >
            <div className="footer_image">
            <img src={logo}  alt='insta-icon'/>
            <img src={logo2}  alt='facebook-icon'/>
            <img src={logo3}  alt='twitter-icon'/>
            </div>
        </div> 
    )
}