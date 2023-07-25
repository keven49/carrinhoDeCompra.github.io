import React, { useContext } from 'react';
import { CartContext } from '../../store/AppContext';
import { Cart } from '../../components/Cart/Cart';
import  Container  from 'react-bootstrap/Container';

export const CartContainer = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleIncreaseQuantity = (product) => {
    increaseQuantity(product);
  };

  const handleDecreaseQuantity = (product) => {
    decreaseQuantity(product);
  };

  return (
    <Container>
    <Cart
      cartItems={cartItems}
      handleRemoveFromCart={handleRemoveFromCart}
      handleIncreaseQuantity={handleIncreaseQuantity}
      handleDecreaseQuantity={handleDecreaseQuantity}
    />
    </Container>
  );
};


