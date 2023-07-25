import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductList } from './components/ProductList/ProductList';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './store/AppContext'; 
import { Sidebar } from './sidebar/sidebar';
import { ProductListContainer } from './containenrs/ProductListContainer/ProductListContainer';
import { CartContainer } from './containenrs/CartContainer/CartContainer';

function App() {
  return (
    <CartProvider>
      
        <BrowserRouter>
          <div className="App">
            <Sidebar />
            <Routes>
              <Route path='/home' element={<ProductListContainer />} />
              <Route path="/productList" element={<ProductListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      
    </CartProvider>
  );
}

export default App;
