import React from 'react';
import NavBar from '../NavBar';
import ProductList from './ProductList';
import './Products.css';

/**
 * Rendered by the route '/produtos', provides style and
 * wraps ProductList.
 */
const Products = () => (
  <div>
    <NavBar />
    <div className="productsContent">
      <ProductList />
    </div>
  </div>
);

export default Products;
