
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import TestComponent from "./components/TestComponent/TestComponent";
import Home from "./components/Home";
import Navbar from "./Navbar";
import Menu from './components/Menu';
import Reservation from "./components/Reservation";
import Review from "./components/Review";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <Routes>
      <Route  exact path="/" element={<Home /> } />
      <Route  exact path="Menu" element={<Menu /> } />
      <Route  exact path="Reservation" element={<Reservation /> } />
      <Route  exact path="Review" element={<Review /> } />
      <Route  exact path="Blog" element={<Blog /> } />
      </Routes>
    </div>
  );
}
export default App;


