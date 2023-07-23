import { useAuth } from "../context/AuthContext";
import {UseMenu} from "../context/menuContext";
import { Link } from "react-router-dom";
export function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    const { toggleMenu } = UseMenu();   
    console.log(isAuthenticated, user)

    return (
        <section className="menu__appear">
            <aside className="menu__container">
                <div className="menu__close">
                    <button className="close__button" onClick={toggleMenu} data-menu-close><i className="gg-close-r"></i></button>
                </div>
                <div className="menu__items">
                    <div className="menu">
                        <ul>
                            <Link className="menu__item-link" to="/"><li className="menu__item">Inicio</li></Link>
                            <Link className="menu__item-link" to="/about-us"><li className="menu__item">Quienes Somos</li></Link>
                            <Link className="menu__item-link" to="/products"><li className="menu__item">Productos</li></Link>
                            <Link className="menu__item-link" to="/contact"><li className="menu__item">Contacto</li></Link>
                            {isAuthenticated ? (
                        <>
                            <Link className="menu__item-link" to="/cart"><li className="menu__item">Mi Carrito</li></Link>
                            <Link className="menu__item-link" to="/tasks"><li className="menu__item">Mis tareas</li></Link>
                            <Link className="menu__item-link" to="/"><li className="menu__item" onClick={logout}>Logout</li></Link>
                        </>
                        ) : (
                        <>
                            <Link className="menu__item-link" to="/login"><li className="menu__item">Login</li></Link>
                            <Link className="menu__item-link" to="/register"><li className="menu__item">Regístrate</li></Link>
                        </>
                        )}
                        </ul>
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default Navbar;