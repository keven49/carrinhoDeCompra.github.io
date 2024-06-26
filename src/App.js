import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './store/AppContext'; 
import { HeaderPartial } from './headerPartial/headerPartial';
import { ProductListContainer } from './containenrs/ProductListContainer/ProductListContainer';
import { CartContainer } from './containenrs/CartContainer/CartContainer';

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <div className="App">
          <HeaderPartial />
              <Routes>
                  <Route path="/" element={<Navigate to="/productList" />} />
                  <Route path="/productList" element={<ProductListContainer />} />
                  <Route path="/cart" element={<CartContainer />} />
              </Routes>
          </div>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
