// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import {
  getCartItemsFromLocalStorage,
  setCartItemsToLocalStorage,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../services/Service' ;

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  useEffect(() => {
    setCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart: (product) => setCartItems(addToCart(cartItems, product)),
        removeFromCart: (product) => setCartItems(removeFromCart(cartItems, product)),
        increaseQuantity: (product) => setCartItems(increaseQuantity(cartItems, product)),
        decreaseQuantity: (product) => setCartItems(decreaseQuantity(cartItems, product)),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};