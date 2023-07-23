import { createContext } from 'react';
import { useState, useContext } from 'react';
import { getProductRequest, getProductsRequest } from '../api/products';
import { addToCartRequest, getCartRequest, deleteCartItemRequest, deleteCartItemsRequest } from '../api/cart';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    } else {
        return context;
    }
}

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = async (data) => {
        try {
            const res = await addToCartRequest(data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getCartItems = async () => {
        try {
            const res = await getCartRequest();
            setCartItems(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCartItem = async (id) => {
        try {
            const res = await deleteCartItemRequest(id);
            setProducts(products.filter((product) => product._id !== id));
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCartItems = async () => {
        try {
            for (let i = 0; i < cartItems.length; i++) {
                const res = await deleteCartItemRequest(cartItems[i]._id);
                console.log(res.data);
            }
            navi
        } catch (error) {
            console.log(error);
        }
    }

    const getProducts = async () => {
        try {
            const res = await getProductsRequest();
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getProduct = async (id) => {
        try {
            const res = await getProductRequest(id);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                useProducts,
                getProducts,
                getProduct,
                addToCart,
                getCartItems,
                cartItems,
                deleteCartItem,
                deleteCartItems
            }}
    >
        {children}
    </ProductContext.Provider>
    );
}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired
}