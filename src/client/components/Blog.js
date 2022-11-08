import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './Styles/Blog.css'
import image1 from './Images/blogs/image1.png'
import image2 from './Images/blogs/image2.png'
import image3 from './Images/blogs/image3.png'
import image4 from './Images/blogs/image4.png'
import image5 from './Images/blogs/image5.png'
import image6 from './Images/blogs/image6.png'
//import image7 from './Images/blogs/image7.png'
//import image8 from './Images/blogs/image8'


export default function Blog() {
    const Blogs = [
        {
            image: image1 ,
            title: 'Chicken Pie With Radish Greens',
            description: 'Chef Violeta shares one of her favorite food saving dishes from her grandmother - chicken pie that uses leftover chicken and radish greens. This adaptable recipe can be prepared with other meats and vegetables.',
            link : 'https://stopfoodwaste.org/tips/blog/chicken-pie-with-radish-greens-video'
        },
        {
            image: image2 ,
            title: "Your Pumpkin's Second Life",
            description: 'Rather than composting your Halloween pumpkins, consider giving them a second life at your dinner table.',
            link: 'https://stopfoodwaste.org/tips/blog/your-pumpkins-second-life'
        },
        {
            image: image3,
            title: "Waste Reducing Food Hacks",
            description: 'Get the most out of your produce with simple tips and chef hacks to cut down on food waste from Mike Weller, chef and instructor at 18 Reasons.',
            link: 'https://stopfoodwaste.org/tips/blog/waste-reducing-food-hacks-video'
        },
        {
            image: image4,
            title: "Event: Maximizing Food for Your Budget, Health, Community and the Planet ",
            description: 'Watch a recent lunchtime conversation with Food Shift to learn how to make the most of our valuable food resources.',
            link: 'https://stopfoodwaste.org/tips/blog/event-maximizing-food-for-your-budget-health-community-and-the-planet-video'
        },
        {
            image: image5,
            title: "Food Shift Kitchen Guide ",
            description: 'Check out this new, easy to use resource for reducing wasted food in your kitchen!',
            link: 'https://stopfoodwaste.org/tips/blog/food-shift-kitchen-guide'
        },
        {
            image: image6,
            title: "Quick Greens Gratin",
            description: 'Have leftover ingredients from a recipe but not enough to recreate it? Savi Joshi, 18 Reasons Chef Educator, shows how to repurpose ingredients with some pantry staples to create a quick, easy, completely new meal.',
            link: 'https://stopfoodwaste.org/tips/blog/quick-greens-gratin-video'
        }
    ];
    const RenderBlog = Blogs.map(blog => {
            return (
                <div className='food-blog'>
                    <img src={blog.image}  alt='pic' />
                    <h2>{blog.title}</h2>
                    <a href={blog.link}>
                    <p>{blog.description} 
                    <span className='read-more-text'>Read more...</span></p></a>
                   
                </div>
            )
        })

    return (
        <div >
            <div className='wrapper'>
            <Header />
            <div className='blog-container'>
                <h1>Stop Food Waste Blog</h1>
                <div className='blog-render'>{RenderBlog}</div>
              
            </div>
            </div>
            <Footer />
        </div>

    )
}