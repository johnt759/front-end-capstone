import Hero from './MainComponents/Hero.js';
import Specials from './MainComponents/Specials.js';
import Testimonials from './MainComponents/Testimonials.js';
import About from './MainComponents/About.js';

function Home() {
    return (
        <section>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </section>
    );
}
export default Home;