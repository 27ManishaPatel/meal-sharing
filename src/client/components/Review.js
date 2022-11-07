
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default function Review () {
    fetch('/api/reservations')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
   
    return(
        <div>
            <Header/>
            <Footer />
        </div>
       
    )
}