# Assignment 1: React Components

## Overview
This assignment demonstrates the creation of basic and nested React components using JSX templates. The two parts of the assignment include:

1. **Creating a Simple React Component**
2. **Creating Nested Components**

---

## Part 1: Simple React Component
### File: `MyComponent.jsx`
```jsx
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Welcome to My Component!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

export default MyComponent;
```

### File: `App.js`
```jsx
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <h1>React App</h1>
      <MyComponent />
    </div>
  );
}

export default App;
```
### OUTPUT-1.Creating a Simple React Component
![ss](https://github.com/user-attachments/assets/668da9af-0e5d-4812-8404-4701c9ed5422)

---

## Part 2: Nested Components
### File: `ShoppingCart.jsx`
```jsx
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
      <h2>Your Shopping Cart</h2>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
```
### OUTPUT-2.Creating Nested Components
![image](https://github.com/user-attachments/assets/f6470d84-245e-416d-82f7-aa342d877c43)

### Steps to Run the Application:
1. **Install React**: Ensure you have Node.js and npm installed. Run the following commands in your terminal:
   ```bash
   npx create-react-app react-assignment
   cd react-assignment
   ```

2. **Add Files**:
   - Replace the default `App.js` with the code provided in Part 1.
   - Create `MyComponent.jsx` and `ShoppingCart.jsx` in the `src` folder and add the respective code.

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **View in Browser**: Open [http://localhost:3000](http://localhost:3000) to see the output.

---

## Expected Output Screenshots

### Part 1: Simple Component Output
![Simple Component Output](./screenshots/simple-component-output.png)

### Part 2: Nested Components Output
![Nested Components Output](./screenshots/nested-components-output.png)

---

## Notes
- Ensure that your CSS styles are appropriately defined to enhance the visual appearance of the components (optional).
- If you encounter errors, double-check the import paths and syntax.

---

## Conclusion
This assignment provides a foundational understanding of how to create and use React components, laying the groundwork for building more complex applications.
