import React from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'
import {FaTrash, FaEdit, FaCartPlus} from "react-icons/fa";

const ProductList = (props) => {

  const {products, cartItems, removeProduct, addToCartHandler,updateQuantityFromList,removeProductFromCart}=props;

    /* Handel delete is a fuction that will take a productId and first it will check for the product is 
       existing in the cart or not.
       If product will be in the cart then first it will delete form the cart
       If not in cart, It will delete product from product list only.
        */
    const handleDelete=(productId)=>{
      const isProductInCart = cartItems.some(product => product.id === productId);
      if(!isProductInCart){
        removeProduct(productId);
      }else{
        removeProductFromCart(productId);
        removeProduct(productId);
      }
    }
    
    // Add to cart handler, takes productId and add this product into the cart.
    const handleAddToCart = (productId)=>{
      // Find the product form store based on the productId return that product
      const productToAdd = products.find((product) => product.id === productId);
      if(productToAdd){
        //Checking wether product is already in cart or not If not in cart, Add product to cart.
        const isProductInCart = cartItems.some(product => product.id === productId);
        if(!isProductInCart){
          addToCartHandler(productToAdd);
          toast.success("Product Added to Cart");
        }
        //If product is already in the cart then increase the quantity.
        else{
          const qunatityToUpdate = cartItems.find((items) => items.id ===productId);
          updateQuantityFromList(productId, qunatityToUpdate.quantity+1);
          toast.success("Quantity of product updated in cart");
          
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
              <td>

                <Link to={`/productInfo/${product.id}`} className='product-info'>
                {product?.productName}
                </Link>
              </td>
                <td>${product?.price}</td>
                <td>{product?.description}</td>
                <td>{product?.category?.value}</td>
                <td>
                  <Link to={`/editProduct/${product.id}`}>
                    <FaEdit className='edit-product-icon'/>
                  </Link>
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
