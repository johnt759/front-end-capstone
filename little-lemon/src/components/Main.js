//import './Styles/main_style.css';
import Hero from './MainComponents/Hero.js';
import Specials from './MainComponents/Specials.js';
import Testimonials from './MainComponents/Testimonials.js';
import About from './MainComponents/About.js';
import BookingPage from './MainComponents/BookingPage.js';
import ConfirmedBooking from './MainComponents/ConfirmedBooking.js';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

function Main() {
    const [availableTimes, dispatchData] = useReducer(updateTimes(), initializeTimes());

    function updateTimes() {
        return [
            {option: "", time: "Select a time"},
            {option: "17:00", time: "17:00"},
            {option: "18:00", time: "18:00"},
            {option: "19:00", time: "19:00"},
            {option: "20:00", time: "20:00"},
            {option: "21:00", time: "21:00"},
            {option: "22:00", time: "22:00"},
        ]
    }

    function initializeTimes() {
        return [
            {option: "", time: "Select a time"},
            {option: "17:00", time: "17:00"},
            {option: "18:00", time: "18:00"},
            {option: "19:00", time: "19:00"},
            {option: "20:00", time: "20:00"},
            {option: "21:00", time: "21:00"},
            {option: "22:00", time: "22:00"},
        ]
    }

    return (
        <main className="main-section">
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/specials" element={<Specials/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchData={dispatchData}/>}/>
            </Routes>
         </main>
    );
}
export default Main;