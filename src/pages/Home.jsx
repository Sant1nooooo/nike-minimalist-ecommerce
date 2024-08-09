import Navigation from '../layouts/Navigation'
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer';
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
export default function Home(){
  const navigate = useNavigate();
  const sessionAcccount = sessionStorage.getItem('account');
  const reference = useRef();
  
  useEffect(()=>{ 
    if(!sessionAcccount) navigate('/login');
    }, []);
  
  return(
    <div ref={reference} className="site-wrapper">
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>  
  );
}