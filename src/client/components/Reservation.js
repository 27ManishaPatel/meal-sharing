import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default function Reservation() {

        fetch('/api/meals').then(res => res.json()).then(res => {
                console.log(res) 
            })
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}