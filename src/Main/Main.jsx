import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Main = () => {
  return (
    <div className='flex flex-col min-h-screen'>
    <NavBar></NavBar>
    <main className='flex-grow'>
<Outlet></Outlet>
    </main>
    
    <Footer></Footer>
    </div>
    
    
  );
};

export default Main;