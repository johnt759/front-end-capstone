import './Styles/main_style.css';
import Home from './Home.js';
import BookingPage from './MainComponents/BookingPage.js';
import ConfirmedBooking from './MainComponents/ConfirmedBooking.js';
import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import { fetchAPI } from './api.js';

function Main() {
    const [availableTimes, dispatchData] = useReducer(updateTimes(), initializeTimes());

    function updateTimes() {
        let newDate = new Date();
        let thisYear = newDate.getFullYear();
        let thisMonth = newDate.getMonth()+1;
        let thisDay = newDate.getDate();
        let thisDate = thisYear+'-'+thisMonth+'-'+thisDay;

        return fetchAPI(thisDate);
    }

    function initializeTimes() {
        // Get today's date.
        let newDate = new Date();
        let thisYear = newDate.getFullYear();
        let thisMonth = newDate.getMonth()+1;
        let thisDay = newDate.getDate();
        let thisDate = thisYear+'-'+thisMonth+'-'+thisDay;

        return fetchAPI(thisDate);
    }

    return (
        <main className="main-section">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchData={dispatchData}/>}/>
                <Route path="/confirmed" element={<ConfirmedBooking/>}/>
            </Routes>
         </main>
    );
}
export default Main;