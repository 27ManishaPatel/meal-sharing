import React from 'react';
import  "./Styles/Footer.css";
import logo from './Images/instagram.png';
import logo2 from './Images/facebook.png';
import logo3 from './Images/twitter.png';

export default function Footer() {
    return (
        <div className="footer_container">
                <address>
                    <span className='add-title'>Email:</span> meal@gmail.com 
                    <span className='add-title'> Phone:</span>  +45 91919191 
                    <span className='add-title'>Opening hours: </span> 9am - 10pm 
                    <span className='add-title'>Place:</span> Copenhagen Street 27
                </address>
            <div className="footer_image">
            <img src={logo}  alt='insta-icon'/>
            <img src={logo2}  alt='facebook-icon'/>
            <img src={logo3}  alt='twitter-icon'/>
            </div>
        </div> 
    )
}