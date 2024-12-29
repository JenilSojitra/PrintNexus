import React, { createContext } from 'react'
import { products } from '../assets/assets'

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {

    const currency = (0).toLocaleString(
        "en-US",
        {
            style: 'currency',
            currency: "INR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }
    ).replace(/\d/g, '').trim();

    const values = {
        products, currency
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider