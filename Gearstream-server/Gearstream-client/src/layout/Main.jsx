import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"

const Main = () => {

  return (
    <div className="bg-prigmayBG">
        <div>
        <Navbar />
        <div className="min-h-screen"><Outlet />
        </div>
        

      </div>
    
       
    </div>
  );
};

export default Main;
