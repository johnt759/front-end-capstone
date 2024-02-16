import React, {useState, useEffect} from "react";
import './Styles/BookingForm.css';
import { useNavigate } from "react-router-dom";
import {submitAPI} from '../api.js';

// The following components below appear only if an input is invalid.
const DateRequired = () => {
    return (
        <p className="error">Please include the date.</p>
    )
}

const TimeRequired = () => {
    return (
        <p className="error">Please include the time.</p>
    )
}

const GuestsRequired = () => {
    return (
        <p className="error">Please enter the number of guests.</p>
    )
}

const InvalidNumber = () => {
    return (
        <p className="error">Number of guests must be between 1 and 10.</p>
    )
}

const OccasionRequired = () => {
    return (
        <p className="error">Please select an occasion.</p>
    )
}

function BookingForm(props) {
    let {availableTimes, dispatch} = props;

    const Confirm = useNavigate();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    // Return true only if all values are not empty, and the number of guests is between 1 and 10 inclusively.
    function allValid() {
        return (
            date && time && guests && (guests >= 1 && guests <= 10) && occasion
        )
    }

    function clearFields() {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    const submitForm = (e) => {
        e.preventDefault();
        let newForm = [date, time, guests, occasion];
        // In case of success, clear away the input forms and redirect over to the confirmation page.
        // Otherwise, alert the user that the booking is already reserved or the form can't be submitted.
        if (submitAPI(newForm) == true) {
            alert("Form submitted!");
            clearFields();
        
            // After submission, redirect over to the confirmation page.
            Confirm("/confirmed");
        }
        else {
            alert("The booking is already reserved for that date. Try another one.");
        }
    }

    useEffect(() => {

    }, [])

    return (
        <section className="form-section">
            <h2>Fill in the fields below</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="res-date">Choose date</label>
                <br/>
                <input aria-label="Select a date" type="date" id="res-date" value={date} 
                onChange={e=>setDate(e.target.value)}/>
                {!date ? (<DateRequired/>) : (<br/>)}
                <br/>
                <label htmlFor="res-time">Choose time</label>
                <br/>
                <select aria-label="Select a time" id="res-time" value={time} onChange={
                    e => {setTime(e.target.value)}}>
                    <option value="">Select a time</option>
                    {availableTimes?.map(thisTime => (
                        <option value={thisTime.time}>{thisTime.time}</option>
                    ))}
                </select>
                {!time ? (<TimeRequired/>) : (<br/>)}
                <br/>
                <label htmlFor="guests">Number of guests</label>
                <br/>
                <input aria-label="Select the number of guests" type="number" placeholder="1"
                id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                {!guests ? (<GuestsRequired/>) : (<br/>)}
                {(guests < 1 || guests > 10) ? (<InvalidNumber/>) : (<br/>)}
                <br/>
                <label htmlFor="occassion">Occassion</label>
                <br/>
                <select aria-label="Select an occasion" id="occasion" value={occasion}
                onChange={e => setOccasion(e.target.value)}>
                    <option value="">Occasions</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                {!occasion ? (<OccasionRequired/>) : (<br/>)}
                <br/>
                <input aria-label="Submit form" disabled={!allValid()} type="submit" value="Make Your Reservation"/>
            </form>
         </section>
    );
}
export default BookingForm;