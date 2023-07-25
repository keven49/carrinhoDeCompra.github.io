// CartService.js

export const getCartItemsFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };
  
  export const setCartItemsToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  export const addToCart = (cartItems, product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      return cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...cartItems, { ...product, quantity: 1 }];
    }
  };
  
  export const removeFromCart = (cartItems, product) => {
    return cartItems.filter((item) => item.id !== product.id);
  };
  
  export const increaseQuantity = (cartItems, product) => {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  };
  
  export const decreaseQuantity = (cartItems, product) => {
    return cartItems.map((item) =>
      item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
  };
  