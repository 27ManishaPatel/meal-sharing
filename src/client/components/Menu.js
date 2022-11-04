import React, { useEffect, useState } from 'react';
import './Styles/Menu.css'
import Header from "./Header";
import Footer from "./Footer";
import logo from './Images/images-3.png'



export default function Menu() {
    const [meal, setMeal] = useState([])

    useEffect(()=>{
        (async()=>{
            const result = await fetch('/api/meals').then(res => res.json())
            console.log(result)
            setMeal(result);

        })()
    }, [])

    const ListOfMeals = meal.map(item => {
            return (
                <div className='meals'>
                 <p key={item.id}>{item.title}</p>
                 <p>Id: {item.id}</p>
                 <img src={logo} width='200px'/>
                 <p>{item.description}</p>
                 <p>Price: {item.price}</p>
                </div>
           
            )
        })
    
    return (
        <>
             <Header/>
             <div className='meal_container'>
                {ListOfMeals}
             </div>
             <Footer />
        </>
    )
}