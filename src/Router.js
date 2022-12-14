import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import DetailPage from './pages/DetailPage/DetailPage';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Category from './components/List/Category';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/list" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
