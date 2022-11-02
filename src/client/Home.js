import React from "react";
//import logo from './assets/images/meal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mealName">
            <header>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/Menu">Menu</Link></li>
                        <li className="nav-item"><Link to="/Reservation">Reservation</Link></li>
                        <li className="nav-item"><Link to="/Review">Review</Link></li>
                        <li className="nav-item"><Link to="/Blog">Blog</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </div>
    );
}