import { configureStore } from "@reduxjs/toolkit";
import  cart from "./slices/cart.slice";
import client from "./slices/client.slice";
import products from "./slices/products.slice";

export default configureStore({
    reducer:{
        client,
        cart,
        products
    }
})