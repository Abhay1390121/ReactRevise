import {useState} from 'react';
const Cart = ({cartItems}) =>{
  
    const payAmount  = () =>{
        alert("Amount paid");
    }
    return(
        <div className="cart-section">
            <div className="added-product">
                {cartItems.map((item) => (
                <div className="cart-product" key={item.id}>
                    <h4>Product Name: {item.productName}</h4>
                    <div>Description: {item.description}</div>
                    <div>Category: {item.category.value}</div>
                    <div>Price: ${item.price}</div>
                    <div className="quantity">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" htmlFor="quanity" id="qunatity" min={0}></input>
                        <button className="delete-button">Remove</button>
                    </div>
                </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="card">
                    <h1>Cart Summary</h1>
                    <div>Total Items:{}</div>
                    <div>Total Price: {}</div>
                    <button className="success-button" onClick={payAmount}> Pay Now </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
