const Cart = () =>{

    const products = [
        {id:1, name:'apple', price:2000, description:"iphone", category:"electronics" },
        {id:2, name:'apple', price:1200, description:"iphone", category:"electronics" },
       
    ]

    const payAmount  = () =>{
        alert("Amount paid");
    }
    return(
        <div className="cart-section">
            <div className="added-product">
                {products.map((item) => (
                <div className="cart-product" key={item.id}>
                    <h4>Product Name: {item.name}</h4>
                    <div>Description: {item.description}</div>
                    <div>Category: {item.category}</div>
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
