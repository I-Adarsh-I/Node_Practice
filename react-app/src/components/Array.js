import React, { Fragment } from 'react'
// import products from './products.json'

export default function Array() {
    const products = ['Laptop', 'Desktop', 'Keyboard']
  return ( 
    <Fragment>
        <h1>Products are: </h1>
        <ul>
            {products.map((product) => <li key={product.id}>{product}</li>)}
        </ul>
    </Fragment>
    );
}
