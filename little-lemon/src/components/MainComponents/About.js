import './Styles/About.css';
import chef from './restaurant chef B.jpg';
import restaurant from './restaurant.jpg';

function About() {
    return (
        <section className="about-section">
            <img src={restaurant} alt="Little Lemon restaurant"/>
            <img src={chef} alt="Restaurant chef"/>
            <h1>Little Lemon</h1>
            <h2>Chicago, Illinois</h2>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </section>
    );
}
export default About;