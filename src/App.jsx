
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  //initialCart retrieves the cart from localStorage. If it doesn't exist, it initializes an empty array.
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

  //cart is a state variable initialized with initialCart. setCart is used to update this state.
  const [cart, setCart] = useState(initialCart);

  //useEffect is used to store the cart state in localStorage whenever cart changes.
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //addToCart checks if the book is already in the cart. If not, it adds the book to cart.
  const addToCart = (book) => {
    if (!cart.find(item => item.name === book.name)) {
      setCart([...cart, book]);
    }
  };

  //removeFromCart removes the bookToRemove from cart by filtering out the book with a matching name.
  const removeFromCart = (bookToRemove) => {
    setCart(cart.filter((book) => book.name !== bookToRemove.name));
  };

  //books is an array containing objects representing different books with their image URL, name, and price.
  const books = [
    {
      image: "https://upload.wikimedia.org/wikipedia/en/6/6a/Sacred_Games_%28novel%29_cover.jpg",
      name: "Sacred Games",
      price: 210
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/The_Palace_of_Illusions.jpg/220px-The_Palace_of_Illusions.jpg",
      name: "The Palace of Illusions",
      price: 245
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/A_Fine_Balance.jpg/220px-A_Fine_Balance.jpg",
      name: "A Fine Balance",
      price: 250
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Thegodofsmallthings.jpg/220px-Thegodofsmallthings.jpg",
      name: "The God of Small Things",
      price: 180
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Asuitableboy.jpg?20110306093033",
      name: "A Suitable Boy ",
      price: 155

    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/The_White_Tiger.JPG/220px-The_White_Tiger.JPG",
      name: "The White Tiger",
      price: 125

    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Shadow-lines.jpg",
      name: "The Shadow Lines",
      price: 160
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/TheGuide.jpg/220px-TheGuide.jpg",
      name: "The Guide",
      price: 220
    }
  ];

  return (
    <div className="app">
      <Navbar cartCount={cart.length} />
      {/* book-list div maps through each book in the books array and renders a BookCard component for each book. */}
      <div className="book-list">
        {/* BookCard component is passed props like book, addToCart, removeFromCart, and
         isInCart to manage interactions with each book. */}
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={cart.some((item) => item.name === book.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
