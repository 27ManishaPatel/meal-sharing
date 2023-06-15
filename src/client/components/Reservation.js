import React, { useEffect, useState } from 'react';
import './Styles/Menu.css'
import Header from "./Header";
import Footer from "./Footer";

export default function Reservation () {
    const [reservation, setReservation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchReservation = () => {
        setIsLoading(true);
        fetch('/api/reservations')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setReservation(res)})
            .then(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchReservation();
    }, [])

    const ListOfReservation = reservation.map(res => {
        return (
            <div className='meals'>
                <p key={res.id} className='title'>Meal No: {res.meal_id}
                </p>
                <p className='description'>Name: {res.contact_name

}</p>
                <p className='description'>No of Guest: {res.number_of_guests
    }</p>
            </div>
        )
    })
    return(
        <div>
            
            <div className='wrapper'>
            <Header/>
                {isLoading && <p>Loading...</p>}
                {reservation.length === 0 ? <p>There is no meal available</p> :
                <div className='meal_container'>{ ListOfReservation }</div> 
                }
            </div>
            <Footer />
        </div>      
    )
}