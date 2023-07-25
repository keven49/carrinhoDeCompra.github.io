// components/ProductList.js
import React from 'react';
import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ProductList = ({ productList, cartItems, handleAddToCart }) => {
  return (
    
      <Row>
        {productList.map((product) => (
          <CardBS key={product.id} style={{ width: '18rem' }}>
            <CardBS.Img variant="top" src={product.image} alt={product.name} />
            <CardBS.Body>
              <CardBS.Text>{product.name}</CardBS.Text>
              <CardBS.Text>R$ {product.price.toFixed(2)}</CardBS.Text>
              <CardBS.Text>{product.description}</CardBS.Text>
              {cartItems.find((item) => item.id === product.id) ? (
                <Button  variant="secondary" disabled >
                  Adicionado<Badge bg="secondary"></Badge>
                </Button>
              ) : (
                <Button  variant="dark" onClick={() => handleAddToCart(product)}>
                  Adicionar ao Carrinho<Badge bg="secondary"></Badge>
                </Button>
              )}
            </CardBS.Body>
          </CardBS>
        ))}
      </Row>
    
  );
};



