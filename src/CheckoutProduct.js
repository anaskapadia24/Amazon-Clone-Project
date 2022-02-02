// import React from 'react'
// import './CheckoutProduct.css'

// function CheckoutProduct(id, title, price, image) {
//     return (
//         <div className='checkoutProuct'>
//              <img className='checkoutProdcutImage' src={image} alt='lo'/>

//              <div className='checkoutProuct--info'>
//                  <p className='checkoutProuct--title'>{title}</p>
//                  <p className='checkoutProuct--price'>
//                      <bold>₹</bold>
//                      <strong>{price}</strong>
//                  </p>
//              </div>

//              <button>Frmove From Cart</button>
//         </div>
//     )
// }

// export default CheckoutProduct



import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, price, image }) {
    const [{cart}, dispatch] = useStateValue();
    
    const removeFromCart = () => {
      dispatch({
         type: "REMOVE_FROM_CART",
         id:id,
      })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={image} alt=''/>

            <div className='checkoutProduct--info'>
                <p className='checkoutProduct--title'>{title}</p>
                <p className='checkoutProduct--price'>
                <bold>₹</bold>
                <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
