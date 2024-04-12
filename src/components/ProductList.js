
import React from 'react';

const ProductList = ({products, cartItems, removeProduct, addToCartHandler }) => {
    // console.log('product',products);
    const handleDelete=(productId)=>{
      removeProduct(productId);
    }

    const handleAddToCart = (productId)=>{
      const productToAdd = products.find((product) => product.id === productId);
      if(productToAdd){
        const isProductInCart = cartItems.some(product => product.id === productId);
        if(!isProductInCart){
          addToCartHandler(productToAdd);
        }
        else{
          alert("Product is already present into the cart");
        }
      }

    }
  return (
    <div className='product-list-card'>
      <table>
        <thead>
          <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
              <tr key={product.id}>
                <td>{product?.productName}</td>
                <td>${product?.price}</td>
                <td>{product?.description}</td>
                <td>{product?.category?.value}</td>
                <td>
                  <button className='delete-button' onClick={()=>handleDelete(product.id)}>Delete</button>
                  <button className="success-button" onClick={()=> handleAddToCart(product.id)}>Add to Cart</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
