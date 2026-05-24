import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Main = () => {
  return (
    <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
};

export default Main;