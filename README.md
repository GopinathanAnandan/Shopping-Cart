# React Shopping Cart Task:

In this task i created basic shopping page navbar top fixed contain cart and cart count then i display different books for sale in card contains book img, name, price and add to cart button. If i click that add to cart button the count in the navbar cart count increase and add to cart button change to remove from cart. To achieve this i used hooks concept(useState and useEffect) and Conditional rendering.

# Components:
<ul></ul>
<li>
  Navbar
</li>
<li>
    BookCard
</li>
</ul>

# App.jsx
<ul>
<li>The application uses React hooks (useState and useEffect) to manage state and side effects (localStorage persistence).</li>
<li>It renders a list of books dynamically using map and passes necessary props to child components for handling cart functionality (addToCart and removeFromCart).</li>
<li>localStorage is used to persist the cart state across page refreshes.</li>
</ul>
Overall, this setup allows users to view a list of books, add them to a cart, and remove them from the cart, with the cart state persisting between sessions.

# Navbar.jsx

<ul>
  <li>
    It receives props via destructuring.
  </li>
  <li>
    cart-icon Button: receive that props from parent which is App.jsx
  </li>
</ul>

# BookCard.jsx
<ul>
  <li>It receives props (book, isInCart, addToCart, removeFromCart) via destructuring from its parent component.</li>
  <li>Conditional Rendering on the isInCart prop:</li>
  <ul>
    <li>If isInCart is true, it renders a "Remove from Cart" button. This button calls removeFromCart(book) when clicked.</li>
    <li>If isInCart is false, it renders an "Add to Cart" button. This button calls addToCart(book) when clicked.</li>
  </ul>
</ul>

### Event Handlers:

The onClick handlers for the buttons (removeFromCart) and addToCart) use arrow functions to pass the book object to the corresponding functions (removeFromCart and addToCart) defined in the parent component.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
