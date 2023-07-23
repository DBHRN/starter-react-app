function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__section">
                    <h3 className="footer__heading">Síguenos en redes sociales</h3>
                    <div className="footer__icons">
                        <a className="icon__link" href="#"><i className="gg-facebook icon"></i></a>
                        <a className="icon__link" href="#"><i className="gg-youtube icon"></i></a>
                        <a className="icon__link" href="#"><i className="gg-mail icon"></i></a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__text">&copy; 2023 Happy Company. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;