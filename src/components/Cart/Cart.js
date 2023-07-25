import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';


export const Cart = ({ cartItems, handleRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  const calculateItemTotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  

  return (
    <div>
      <ListGroup as='ul'>
        {cartItems.map((item) => (
          <ListGroup.Item as='li'className="d-flex justify-content-between align-items-start" key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '150px', marginRight: '15px' }} />
            <div className="ms-2 me-auto ">
            <p>{item.name}</p> 
            </div>
            <div className="d-flex justify-content-between align-items-start">
            <strong className='fw-bold'> R$ {item.price.toFixed(2)}</strong>
            <div className='ms-4' variant="secondary" onClick={() => handleDecreaseQuantity(item)} disabled={item.quantity === 1}>
            <i className="bi bi-dash-circle-fill"></i>
            </div>
            <strong className='fw-bold ms-4 me-auto'>{item.quantity}</strong>
            <div className='ms-4' variant="secondary" onClick={() => handleIncreaseQuantity(item)}>
            <i className=" bi-plus-circle-fill"></i>
            </div>
            
            <strong  className='fw-bold ms-4 me-auto'>Total: R$ {calculateItemTotal(item)}</strong>
            
            <div className='fw-bold ms-4 ' variant="danger" onClick={() => handleRemoveFromCart(item)}>
            <i className="bi bi-x-lg"></i>
            </div>
            </div>
            
        
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>Subtotal ({calculateTotalItems()} itens): R$ {calculateCartTotal()}</h3>
        <Button variant='dark' className='fw-bold ms-4'>Fechar pedido</Button>
      </div>
      
    </div>
  );
};