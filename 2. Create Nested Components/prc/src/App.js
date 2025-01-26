import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




import React from 'react';
const ProductItem = ({ name, price, quantity }) => {
return (
<div className="product-item">
<h3>{name}</h3>
<p>Price: ${price}</p>
<p>Quantity: {quantity}</p>
</div>
);
};
 const ShoppingCart = () => {
const products = [
{ name: "Laptop", price: 999, quantity: 1 },
{ name: "Phone", price: 699, quantity: 2 },
{ name: "Headphones", price: 199, quantity: 1 },
];
return (
<div className="shopping-cart">
<h2>Your Shopping Cart </h2>
{products.map((product, index) => (
<ProductItem
key={index}
name={product.name}
price={product.price}
quantity={product.quantity}
/>
))}

<p>- By Atharv </p>
</div>
);
};
 export default ShoppingCart;