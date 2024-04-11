
import React from 'react';

const ProductList = (props) => {
  // console.warn(props);
    const products = [
        {id:1, name:'apple', price:2000, description:"iphone", category:"electronics" },
        {id:2, name:'apple', price:1200, description:"iphone", category:"electronics" },
       
    ]
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
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <button className='delete-button'>Delete</button>
                  <button className="success-button">Add to Cart</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
