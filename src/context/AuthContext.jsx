import { createContext, useState, useContext, useEffect} from "react";
import { registerRequest, loginRequest, verifyTokenRequest, sendMessageRequest} from '../api/auth';
import Cookie from 'js-cookie';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async(user) => {

        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    }
    const sendMessage = async(data) => {

        try {
            const res = await sendMessageRequest(data);
            console.log(res.data);
        } catch (error) {
            setErrors(error.response.data);
        }
    }
    const signin = async(user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        Cookie.remove('token');
        setUser(null);
        setIsAuthenticated(false);
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookie.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
                return;
            } else {
                try {
                    const res = await verifyTokenRequest(cookies.token)
                    console.log(res.data);
                    if (!res.data) {
                        setIsAuthenticated(false);
                        setLoading(false);
                        return;
                    } else {
                        setUser(res.data);
                        setIsAuthenticated(true);
                        setLoading(false);
                    }
                } catch (error) {
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false);
                }
            }
        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider
        value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors,
            sendMessage
        }} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};