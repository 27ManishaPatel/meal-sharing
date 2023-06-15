import React, { useEffect, useState } from 'react';
import './Styles/Menu.css'
import Header from "./Header";
import Footer from "./Footer";
import logo from './Images/images-3.png'

export default function Menu() {
    const [meal, setMeal] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMeals = () => {
        setIsLoading(true);
        fetch('/api/meals')
            .then(res => res.json())
            .then(meals => setMeal(meals))
            .then(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchMeals();
    }, [])

    const ListOfMeals = meal.map(item => {
        return (
            <div className='meals'>
                <p key={item.id} className='title'>{item.title}</p>
                <p className='id'>Meal No: {item.id}</p>
                <img className='meal-image' src={logo} />
                <p className='description'>{item.description}</p>
                <p className='price'>Price: {item.price}</p>
            </div>
        )
    })

    return (
        <>
            
            <div className='wrapper'>
            <Header />
                {isLoading && <p>Loading...</p>}
                {meal.length === 0 ? <p>There is no meal available</p> :
                <div className='meal_container'>{ ListOfMeals }</div> 
                }
            </div>
            <Footer />
        </>
    )
}