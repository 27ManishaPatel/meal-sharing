import React from "react";

import './Styles/Home.css'
import Header from "./Header";
import Footer from "./Footer";
import logo from './Images/delicious.png'
export default function Home() {
    return (
        <div >
            <main className="wrapper">
                <Header />
                <div  >
                    <img className="delicious-img" src={logo} />
                    <div className="main-paragraph" >
                        <p >welcome!<br />
                            Choose between various meals.
                        <br/>
                        <br/>
                        "One cannot think<br/>
                        well, Love well,<br/>
                        sleep well, if one has <br/> 
                        not dined well."            
                        </p>

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}