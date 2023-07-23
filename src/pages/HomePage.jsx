import './../styles/carrousel.css'
import './../styles/about_us.css'
import { Link } from "react-router-dom"
import './../components/script'
import title from './../components/ui/title'
function HomePage() {
    title("Happy Company");
    return (
        <div >
            <section className="carrousel__container">
            <div className="wrapper">
                    <div className="carousel">
                        <article className="carrousel__item">
                            <span className="carrousel__item-image" id="carrousel__item-image-1" draggable="false" >
                                <span className="carrousel__item-text-container" >
                                    <h1 className="carrousel__item-text">Aprendiendo jugando</h1>
                                </span>
                            </span>
                            
                        </article>
                        <article className="carrousel__item">
                            <span className="carrousel__item-image" id="carrousel__item-image-2" draggable="false" >
                                <span className="carrousel__item-text-container" >
                                    <h1 className="carrousel__item-text">Fomentando el brille desde una edad temprana</h1>
                                </span>
                            </span>
                        </article>
                        <article className="carrousel__item">
                            <span className="carrousel__item-image" id="carrousel__item-image-3" draggable="false" >
                                <span className="carrousel__item-text-container" >
                                    <h1 className="carrousel__item-text">Ayudando a niños estimulando su aprendizaje</h1>
                                </span>
                            </span>
                        </article>
                    </div>
                    <i id="left" className="fa-solid fa-angle-left"></i>
                <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
        </section>
        
        <section className="company__description">
                <div className="wrapper">
                    <div className="title">
                        <h2>Descubre Happy Company</h2>
                    </div>
                    <div className="description">
                        <p>En Happy Company nos dedicamos a brindar soluciones innovadoras y de calidad para mejorar la experiencia de aprendizaje de los niños con discapacidad visual. Nuestros productos y servicios están diseñados para fomentar la diversión y el crecimiento de los más pequeños, al tiempo que les brindamos herramientas para estimular su desarrollo cognitivo y emocional.</p>
                    </div>
                    <div>
                        <Link to="/contact"><button className="button">Conoce más</button></Link>
                    </div>
                </div>
        </section>
        <section className="nuestros__productos">
            <div className="nuestros__productos-button-container">
                <div className="nuestros__productos-text-container">
                    <h1 className="nuestros__productos-text">Conoce más sobre nuestros productos</h1>
                </div>
                <div className="nuestros__productos-button">
                    <Link to="/products"><button className="button">Ver catálogo</button></Link>
                </div>
            </div>
        </section>
        <section className="contactanos">
            <div className="wrapper">
                <div className="title">
                    <h2>¿Tienes alguna duda?</h2>
                </div>
                <div className="description">
                    <Link to="/contact"><button className="button">Contáctanos</button></Link>
                </div>
            </div>
        </section>
        <script>
        </script>
        </div>
    )
}
export default HomePage