import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import DetailPage from './pages/DetailPage/DetailPage';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
