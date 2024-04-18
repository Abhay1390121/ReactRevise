import cartImage from "../assets/emptyCart.png";
import {FaTrash} from "react-icons/fa";

const Cart = (props) =>{
    const{cartItems, deleteFromCarthandler, updateProductQuantity} = props;
    const payAmount  = () =>{
        alert("Amount paid");
    }

    const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity), 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    const handleQuantityChange = (productId, newQuantity)=>{
        updateProductQuantity(productId, newQuantity);
    }
    return (!cartItems.length)?(<div className="cart-image"><img  src={cartImage} alt={"empty cart"}/></div>):
    (   <div className="cart-section">
            <div className="added-product">
                {cartItems.map((item) => (
                <div className="cart-product" key={item.id}>
                    <h4>Product Name: {item.productName}</h4>
                    <div>Description: {item.description}</div>
                    <div>Category: {item.category.value}</div>
                    <div>Price: ${item.price}</div>
                    <div className="quantity">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" htmlFor="quanity" id="qunatity" 
                                min={1} 
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} ></input>
                            {/* <button className="delete-button" onClick={()=>deleteFromCarthandler(item.id)} >Remove Product</button> */}
                            <FaTrash className="delete-icon" onClick={()=>deleteFromCarthandler(item.id)}  />
                            
                    </div>
                </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="cart-summary-card">
                    <h1>Cart Summary</h1>
                    <div>Total Items:{totalQuantity}</div>
                    <div>Total Price: {totalPrice}</div>
                    <button className="success-button" onClick={payAmount}> Pay Now </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
