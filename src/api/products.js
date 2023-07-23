import axios from "./axios";

export const getProductsRequest = async () => axios.get("/products");

export const getProductRequest = async (id) => axios.get(`/products/${id}`);