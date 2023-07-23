import './../styles/about_us.css'

function AboutUs() {
    return (
        <div>
        <section className="mission-vision-values">
            <div className="">
                <div className="section-content" id="mision">
                    <div className="section-heading">
                        <h2>Misión</h2>
                    </div>
                    <div className="section-text">
                        <p>Ofrecer una inclusión para la sociedad, fomentando una buena educación y diversión en los niños.</p>
                    </div>
                </div>
                <div className="section-content" id="vision">
                    <div className="section-heading">
                        <h2>Visión</h2>
                    </div>
                    <div className="section-text">
                        <p>Hacer sonreír a los niños de una experiencia única, por un futuro mejor para los pequeños. </p>
                    </div>
                </div>
                <div className="section-content" id="valores">
                    <div className="section-heading">
                        <h2>Valores</h2>
                    </div>
                    <div className="section-text">
                        <ul>
                            <li><i className="fas fa-check"></i><p>Empatía:</p> Nos preocupamos por comprender las necesidades y sentimientos de los demás, creando un entorno acogedor y respetuoso para todos.</li>
                            <li><i className="fas fa-check"></i><p>Tolerancia:</p>  Respetamos y aceptamos las diferencias individuales, promoviendo la diversidad y el respeto mutuo en todo lo que hacemos.</li>
                            <li><i className="fas fa-check"></i><p>Generosidad:</p>  Compartimos nuestros recursos y conocimientos, brindando apoyo y oportunidades a aquellos que más lo necesitan.</li>
                            <li><i className="fas fa-check"></i><p>Fortaleza:</p>  Afrontamos los desafíos con determinación y perseverancia, superando obstáculos para lograr un impacto positivo en la sociedad.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default AboutUs