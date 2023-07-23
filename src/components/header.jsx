import Logo from '../assets/logo.png';
import { useAuth } from "../context/AuthContext";
import {UseMenu} from '../context/menuContext';
import { Link } from "react-router-dom";

function Header() {
    const { isAuthenticated, user } = useAuth();
    const { toggleMenu} = UseMenu();
    console.log(isAuthenticated, user)
    
    return (
        <div>
        <header>
            <div className="position-fix">
                <div className="header">
                    <div className="company__icon">
                        <Link to="/" >
                            <p><img className="logo" src={Logo} alt="logo" />
                            </p>
                            <div className="company__name">
                                <h1 className="company__name-letter" id="company__name-letter-1">H</h1>
                                <h1 className="company__name-letter" id="company__name-letter-2">a</h1>
                                <h1 className="company__name-letter" id="company__name-letter-3">p</h1>
                                <h1 className="company__name-letter" id="company__name-letter-4">p</h1>
                                <h1 className="company__name-letter" id="company__name-letter-5">y</h1>
                                <h1 className="company__name-letter" id="company__name-letter-6"> </h1>
                                <h1 className="company__name-letter" id="company__name-letter-7">C</h1>
                                <h1 className="company__name-letter" id="company__name-letter-8">o</h1>
                                <h1 className="company__name-letter" id="company__name-letter-9">m</h1>
                                <h1 className="company__name-letter" id="company__name-letter-10">p</h1>
                                <h1 className="company__name-letter" id="company__name-letter-11">a</h1>
                                <h1 className="company__name-letter" id="company__name-letter-12">n</h1>
                                <h1 className="company__name-letter" id="company__name-letter-13">y</h1>
                            </div>
                        </Link>
                    </div>
                    {isAuthenticated ? (
                        <>
                            <div className="gretting">
                                <h2 className="gretting__text">Bienvenido, {user.username}</h2>
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    <div className="header__menu">
                        <span>
                            <button className="menu__button" onClick={toggleMenu} data-menu><span className="menu__icon-text">Menu</span><i className="gg-menu-boxed"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header;