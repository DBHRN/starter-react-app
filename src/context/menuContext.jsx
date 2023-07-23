import { createContext } from "react";
import { useState, useContext } from "react";
import PropTypes from "prop-types";


const safeDocument = typeof document !== 'undefined' ? document : {};
const html = safeDocument.documentElement;

const MenuContext = createContext();

export function UseMenu() {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    } else {
        return context;
    }
}
    
    export function MenuProvider({ children }) {
        const [menu, setMenu] = useState(false);
    
        const toggleMenu = () => {
            if (menu === true) {
                html.style.overflow = 'auto';
                console.log("closeMenu");
                setMenu(false);
            } else {
                html.style.overflow = 'hidden';
                setMenu(true);
            }
            console.log(menu);
            closeMenu();
        }
        function closeMenu() {
            if (menu) {
                console.log("closeMenu");
            } else {
                console.log("openMenu");
            }

        }
        return (
            <MenuContext.Provider value={{ menu, toggleMenu }}>
                {children}
            </MenuContext.Provider>
        )
    }

    MenuProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }