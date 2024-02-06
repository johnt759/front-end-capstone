import './Styles/Hero.css';
import food from './restauranfood.jpg';

function Hero() {
    return (
        <section className="hero-section">
            <img src={food} alt="Restaurant food"/>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Meditteranean restaurant, focused on traditional recipes with a modern twist.</p>
         </section>
    );
}
export default Hero;