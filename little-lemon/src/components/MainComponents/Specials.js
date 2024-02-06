import './Styles/Specials.css';
import greek_salad from './greek salad.jpg';
import bruschetta from './bruchetta.svg';
import lemon_dessert from './lemon dessert.jpg';

function Specials() {
    return (
        <section className="special-section">
            <h2>Specials</h2>
            <article className="container">
                <article className="box">
                    <img src={greek_salad} alt="Greek salad"/>
                    <section className="one-line">
                        <h3>Greek salad</h3>
                        <p>$12.99</p>
                    </section>
                    <p>The famous Greek salad of crispy lettuce, peppers, olives
                        and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </article>
                <article className="box">
                    <img src={bruschetta} alt="Bruschetta"/>
                    <section className="one-line">
                        <h3>Bruschetta</h3>
                        <p>$5.99</p>
                    </section>
                    <p>Our Bruschetta is made from grilled bread that has been
                        smeared with garlic and seasoned with salt and olive oil.</p>
                </article>
                <article className="box">
                    <img src={lemon_dessert} alt="Lemon dessert"/>
                    <section className="one-line">   
                        <h3>Lemon dessert</h3>
                        <p>$5.00</p>
                    </section>
                    <p>This comes straight from grandma's recipe book, every last ingredient
                        has been sourced and is as authentic as can be imagined.</p>
                </article>
            </article>
         </section>
    );
}
export default Specials;