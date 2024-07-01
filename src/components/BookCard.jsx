import React from 'react';
//receives props (book, isInCart, addToCart, removeFromCart) via destructuring from its parent component.
const BookCard = ({ book, isInCart, addToCart, removeFromCart }) => {
    return (
        <div className="book-card">
            <img src={book.image} alt={book.name} />
            <h3>{book.name}</h3> {/* Displaying book name */}
            <p>Price: Rs {book.price}</p>
            {/* Conditional Rendering on the isInCart prop */}
            {isInCart ? (
                // If isInCart is true, it renders a "Remove from Cart" button. This button remove(book) when clicked.
                <button onClick={() => removeFromCart(book)}>Remove from Cart</button>
            ) : (
                //If isInCart is false, it renders an "Add to Cart" button. This button add(book) when clicked.
                <button onClick={() => addToCart(book)}>Add to Cart</button>
            )}
        </div>
    );
};

export default BookCard;
