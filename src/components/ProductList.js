
import React from 'react';

const ProductList = ({products, removeProduct}) => {
    console.log('product',products);
    const handleDelete=(productId)=>{
      removeProduct(productId);
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
                <td>{product.productName}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.category.value}</td>
                <td>
                  <button className='delete-button' onClick={()=>handleDelete(product.id)}>Delete</button>
                  <button className="success-button" >Add to Cart</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
