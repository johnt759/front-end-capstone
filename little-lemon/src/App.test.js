/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import BookingForm from './components/MainComponents/BookingForm.js';
import Main, {initializeTimes, updateTimes} from './components/Main.js';
import {render, screen} from "@testing-library/react";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Fill in the fields below");
    expect(headingElement).toBeInTheDocument();
})

// test('Trying to initialize the available times', () => {
//     render(<BookingForm />);
//     let testArray =  [
//         {option: "", time: "Select a time"},
//         {option: "17:00", time: "17:00"},
//         {option: "18:00", time: "18:00"},
//         {option: "19:00", time: "19:00"},
//         {option: "20:00", time: "20:00"},
//         {option: "21:00", time: "21:00"},
//         {option: "22:00", time: "22:00"},
//     ];
//     expect(initializeTimes).toBe(testArray);
// })

// test('Must be able to update the times', () => {
//     render(<BookingForm />);
//     let testArray =  [
//         {option: "", time: "Select a time"},
//         {option: "17:00", time: "17:00"},
//         {option: "18:00", time: "18:00"},
//         {option: "19:00", time: "19:00"},
//         {option: "20:00", time: "20:00"},
//         {option: "21:00", time: "21:00"},
//         {option: "22:00", time: "22:00"},
//     ];
//     expect(updateTimes).toBe(testArray);
// })

test('Button is disabled until all inputs valid', () => {
    render(<BookingForm />);
    const submitButton = screen.getByDisplayValue("Make Your Reservation");
    expect(submitButton).toHaveAttribute("disabled");
})