import React, { useContext, useState } from 'react';
import { CartContext } from '../../store/AppContext';
import { ProductList } from '../../components/ProductList/ProductList';
import { Container } from 'react-bootstrap';

export const ProductListContainer = () => {
  const { addToCart, cartItems } = useContext(CartContext);


  const productList = [
    {
      id: 1,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1K9CeE2C1OHa3zeyhE_MpMRA6hbhmfvUd60aS9GEn294uJtycMY4WXa0E_s6PYKm1VHz4a02jG_aVu9Sez8aN55tGD5h2QztfXUKyv6SFQDd83-BtecObug&usqp=CAE',
      name: 'CHUTEIRA FUTURE ULTIMATE CAMPO',
      description: 'Descrição do Produto 1',
      price: 1049.99,
    },
    {
      id: 2,
      image: 'https://imgnike-a.akamaihd.net/1920x1920/01413615.jpg',
      name: 'Chuteira Nike Mercurial Superfly 8 Elite Campo',
      description: 'Descrição do Produto 2',
      price: 1439.99,
    },
    {
      id: 3,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/104d7dca4e694c89ad79ae9b010db766_9366/Chuteira_X_Speedportal_Verde_GW8407_06_standard.jpg',
      name: 'Chuteira de Campo adidas X Speedportal+ FG - Adulto',
      description: 'Descrição do Produto 3',
      price: 999.99,
    },
    {
      id: 4,
      image: 'https://umbro.vtexassets.com/arquivos/ids/452000/U01FB076_123.jpg?v=637999783306300000',
      name: 'Chuteira Campo Umbro Adamant Club',
      description: 'Em até 10X sem júros',
      price: 199.90,
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <Container>
    <ProductList productList={productList} cartItems={cartItems} handleAddToCart={handleAddToCart} />
    </Container>
  );
};

