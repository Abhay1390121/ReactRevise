import React from 'react';
import {FaTrash, FaEdit, FaCartPlus} from "react-icons/fa"

const ProductList = (props) => {

  const {products, cartItems, removeProduct, addToCartHandler }=props;

    const handleDelete=(productId)=>{
      removeProduct(productId);
    }
    
    // Add to cart handler, takes productId and add this product into the cart.
    const handleAddToCart = (productId)=>{
      // Find the product form store based on the productId return that product
      const productToAdd = products.find((product) => product.id === productId);
      if(productToAdd){
        //Check wether product is already in cart or not.
        const isProductInCart = cartItems.some(product => product.id === productId);
        if(!isProductInCart){
          addToCartHandler(productToAdd);
          alert("Product Added in cart");

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
                  <FaEdit className='edit-product-icon'/>
                  <FaTrash className='delete-icon' onClick={()=>handleDelete(product.id)}/>
                  <FaCartPlus className='add-to-cart-icon' onClick={()=> handleAddToCart(product.id)}/>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
