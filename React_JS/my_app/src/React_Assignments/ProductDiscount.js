import React from 'react'

const ProductDiscount = (props) => {
  return (
    <div>
      {props.products.map(product => {
        const finalPrice = product.price >= 30000 ? product.price-(product.price*10)/100 : product.price;

        return(
            <p key={product.id}>{product.name} - ₹{finalPrice} {product.price > 30000 ? "(10% discount)" : "(No Discount)"}</p>
        )
      })}
    </div>
  )
}

export default ProductDiscount
