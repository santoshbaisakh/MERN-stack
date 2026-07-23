import React from 'react'
import ProductDiscount from './ProductDiscount'

const Product = () => {
    const products = [
        { id: 1, name: "Laptop", price: 60000 },
        { id: 2, name: "Phone", price: 25000 },
        { id: 3, name: "Tablet", price: 18000 },
        { id: 4, name: "TV", price: 55000 },
        { id: 4, name: "AC", price: 30000 }
    ]
    return (<ProductDiscount products = {products}/>)
}

export default Product
