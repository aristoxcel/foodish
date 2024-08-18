
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Main = () => {
      // dynamic title
      const loc= useLocation();
      useEffect(()=>{
        if (loc.pathname==='/') {
          document.title= 'Foodish | Welcome'
        }
        else {
          document.title = `Foodish ${loc.pathname.replace('/', '| ')}`
        }
        if (loc.state) {
          document.title= `Foodish || ${loc.state}`;
        }
      },[loc.pathname, loc.state]);
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
