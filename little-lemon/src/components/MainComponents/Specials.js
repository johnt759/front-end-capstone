import './Styles/Specials.css';
import greek_salad from './greek salad.jpg';
import bruschetta from './bruchetta.svg';
import lemon_dessert from './lemon dessert.jpg';

let special_item = [
    {
        image: greek_salad,
        title: "Greek salad",
        price: "12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        image: bruschetta,
        title: "Bruschetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."

    },
    {
        image: lemon_dessert,
        title: "Lemon dessert",
        price: "5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."

    }
]

function Specials() {
    return (
        <section className="special-section">
            <section className="inline">
                <h2>Specials</h2>
                <input type="button" value="Online Menu"></input>
            </section>
            <article className="container">
                {special_item.map((this_item) => (
                    <article className="box">
                        <img src={this_item.image}/>
                        <section className="one-line">
                            <h3>{this_item.title}</h3>
                            <p>${this_item.price}</p>
                        </section>
                        <p>{this_item.description}</p>
                    </article>
                ))}
            </article>
         </section>
    );
}
export default Specials;