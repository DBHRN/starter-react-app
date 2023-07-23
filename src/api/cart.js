import axios from "./axios";

export const getCartRequest = async () => axios.get(`/cart`);

export const addToCartRequest = async (data) => axios.post(`/cart`, data);

export const deleteCartItemRequest = async (id) => axios.delete(`/cart/${id}`);

export const deleteCartItemsRequest = async () => axios.delete(`/cart`);