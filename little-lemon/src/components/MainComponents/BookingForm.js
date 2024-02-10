import {useState} from "react";
//import {useFormik} from "formik";
import './Styles/BookingForm.css';

function BookingForm(props) {
    let {availableTimes, dispatch} = props;

    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes);
    const [guests, setGuests] = useState(1);
    const [occassion, setOccassion] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Date: ", date);
        console.log("Time: ", time);
        console.log("Number of guests: ", guests);
        console.log("Occassion: ", occassion);
        alert("Form submitted!");

        setDate("");
        setTime("");
        setGuests(1);
        setOccassion("");
    }
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
                <label htmlFor="res-time">Choose time</label>
                <select aria-label="Select a time" id="res-time" value={time} onChange={
                    e => {
                        setTime(e.target.value)
                    }
                    }>
                    {availableTimes?.map(thisTime => (
                        <option value={thisTime.option}>{thisTime.time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input aria-label="Select the number of guests" type="number" placeholder="1" min="1" max="10"
                id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                <label htmlFor="occassion">Occassion</label>
                <select aria-label="Select an occasion" id="occassion" value={occassion} onChange={e => setOccassion(e.target.value)}>
                    <option value="">Occassions</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <input aria-label="Submit form" type="submit" value="Make Your Reservation"/>
            </form>
         </section>
    );
}

export default BookingForm;