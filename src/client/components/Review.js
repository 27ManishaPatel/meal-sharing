import React, { useEffect, useState } from 'react';
import './Styles/Review.css'
import Header from "./Header";
import Footer from "./Footer";
import logo from './Images/images-3.png'

export default function Review () {
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchReviews = () => {
        setIsLoading(true);
        fetch('/api/reviews')
            .then(res => res.json())
            .then(rev => {
                console.log(rev)
                setReview(rev)})
            .then(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchReviews();
    }, [])

    const ListOfReviews = review.map(rev => {
        return (
            <div className='reviews'>
                <p key={rev.id} className='review-title'>{rev.meal_id}
                </p>
                <p className='list-reviews'>{rev.title}</p>
                <p className='list-reviews'>{rev.description}</p>
            </div>
        )
    })
    return(
        <div>
            
            <div className='wrapper'>
            <Header />
                {isLoading && <p>Loading...</p>}
                {review.length === 0 ? <p>There is no meal available</p> :
                <div className='review_container'>{ ListOfReviews }</div> 
                }
            </div>
            <Footer />
        </div>      
    )
}