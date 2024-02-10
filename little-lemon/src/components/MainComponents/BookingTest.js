import BookingForm from './components/MainComponents/BookingForm.js';
import {initializeTimes, updateTimes} from './components/Main.js';
import {render, screen} from "@testing-library/react";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Trying to initialize the available times', () => {
    render(<BookingForm />);
    let testArray =  [
        {option: "", time: "Select a time"},
        {option: "17:00", time: "17:00"},
        {option: "18:00", time: "18:00"},
        {option: "19:00", time: "19:00"},
        {option: "20:00", time: "20:00"},
        {option: "21:00", time: "21:00"},
        {option: "22:00", time: "22:00"},
    ];
    expect(initializeTimes()).toHaveReturnedWith(testArray);
})

test('Must be able to update the times', () => {
    render(<BookingForm/>);
    let testArray =  [
        {option: "", time: "Select a time"},
        {option: "17:00", time: "17:00"},
        {option: "18:00", time: "18:00"},
        {option: "19:00", time: "19:00"},
        {option: "20:00", time: "20:00"},
        {option: "21:00", time: "21:00"},
        {option: "22:00", time: "22:00"},
    ];
    expect(updateTimes()).toHaveReturnedWith(testArray);
})