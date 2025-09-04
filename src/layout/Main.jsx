import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Content from "../components/navbar/Content";

function Main() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
    
      <Content className=" ">
        <Outlet />
      </Content>

      <Footer />
    </div>
  );
}

export default Main;
