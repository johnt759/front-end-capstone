import {useState, useEffect} from "react";
//import {useFormik} from "formik";
import './Styles/BookingForm.css';
import ConfirmedBooking from './ConfirmedBooking.js';
import { useNavigate, Routes, Route } from "react-router-dom";

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

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const allValid = () => {
        return (
            date && time && guests && (guests >= 1 && guests <= 10) && occasion
        )
    }

    const submitForm = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        console.log("Date: ", date);
        console.log("Time: ", time);
        console.log("Number of guests: ", guests);
        console.log("Occassion: ", occasion);

        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    useEffect(() =>
        {
            //let redirect = useNavigate();
            //redirect("/confirmed");
        }
    )
    /*
    const availableTimes =  [
        {option: "", time: "Select a time"},
        {option: "17:00", time: "17:00"},
        {option: "18:00", time: "18:00"},
        {option: "19:00", time: "19:00"},
        {option: "20:00", time: "20:00"},
        {option: "21:00", time: "21:00"},
        {option: "22:00", time: "22:00"},
    ]
    */

    return (
        <section className="form-section">
            <h2>Fill in the fields below</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="res-date">Choose date</label>
                <input aria-label="Select a date" type="date" id="res-date" value={date} 
                onChange={e=>setDate(e.target.value)}/>
                {!date ? (<DateRequired/>) : void(0)}
                <label htmlFor="res-time">Choose time</label>
                <select aria-label="Select a time" id="res-time" value={time} onChange={
                    e => {setTime(e.target.value)}}>
                    {availableTimes?.map(thisTime => (
                        <option value={thisTime.option}>{thisTime.time}</option>
                    ))}
                </select>
                {!time ? (<TimeRequired/>) : void(0)}
                <label htmlFor="guests">Number of guests</label>
                <input aria-label="Select the number of guests" type="number" placeholder="1"
                id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                {!guests ? (<GuestsRequired/>) : void(0)}
                {(guests < 1 || guests > 10) ? (<InvalidNumber/>) : void(0)}
                <label htmlFor="occassion">Occassion</label>
                <select aria-label="Select an occasion" id="occasion" value={occasion}
                onChange={e => setOccasion(e.target.value)}>
                    <option value="">Occasions</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                {!occasion ? (<OccasionRequired/>) : void(0)}
                <input aria-label="Submit form" disabled={!allValid()} type="submit" value="Make Your Reservation"/>
            </form>
         </section>
    );
}

export default BookingForm;