import CartProduct from "../components/Drawer/CartProduct";
import { cartProductID } from "../redux/slice/cartSlice";
import { convertNumber } from "../utils/helperFunction";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

import nikeLogo from '../assets/nike-logo.svg';
import cartIcon from '../assets/cart.svg';
import closeIcon from '../assets/close.svg';
import menuIcon from '../assets/menu.png';


export default function Navigation()
{
  const cartState = useSelector(state => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);
  // const idList = useSelector(cartProductID);
  const navigationSection = useRef();


  return(
    <div ref={navigationSection} className="z-[998] navigation-section shadow-[0px_0px_5px_rgba(0,0,0,0.3),0_0_4px_rgba(0,0,0,0.1)_inset] bg-white sticky top-[0px] px-[20px]">
      <div className="bg-white flex items-center justify-between max-w-[1570px] mx-auto">
        <img src={nikeLogo} alt="nike-logo" height={85} width={85}/>
        <div className={`bg-white sm:block ${isNavigationOpen ? 'hidden' : ''} sm:static absolute sm:w-auto w-full left-0 top-full sm:h-auto h-screen`}>
            <ul className="flex sm:flex-row flex-col sm:h-auto h-[90%] items-center">
              <li className="text-[20px] font-medium mr-[50px] sm:mb-0 mb-[100px]">
                <Link to="/" onClick={()=>{setIsNavigationOpen(prevValue => !prevValue)}}>HOME</Link>
              </li>
              <li className="text-[20px] font-medium mr-[50px] sm:mb-0 mb-[100px]">
                <Link to="/categories" onClick={()=>{setIsNavigationOpen(prevValue => !prevValue)}}>CATEGORIES</Link>
              </li>
              <li className="w-full flex items-center justify-center">
                <button onClick={()=>{
                  setIsOpen(prevValue => !prevValue);
                  setIsNavigationOpen(prevValue => !prevValue);
                  }}>
                  <img src={cartIcon} alt="" height={26} width={26} className="sm:block hidden"/>
                  <p className="sm:hidden block text-[20px] font-medium mr-[50px] sm:mb-0 mb-[100px]"> CART</p>
                </button>
              </li>
              <li>
                <button onClick={()=>{setIsNavigationOpen(prevValue => !prevValue)}} className="sm:hidden block text-[20px] font-medium mr-[50px]"> CLOSE </button>
              </li>
            </ul>
          </div>
          <button className="sm:hidden block" onClick={()=>{setIsNavigationOpen(prevValue => !prevValue)}}>
            <img src={menuIcon} alt="nike-logo" height={35} width={35}/>
          </button>
      </div>
      <div className={`drawer h-screen sm:w-[550px] w-full bg-white absolute top-0 right-0 px-[30px] pt-[50px] pb-[10px] ${isOpen ? 'block' : 'hidden'}`}>
        <button onClick={()=>{ setIsOpen(prevValue => !prevValue) }}>
          <img src={closeIcon} alt="close-button" height={15} width={15}/>
        </button>
        <p className="text-[20px] mb-[10px]">Your Shopping Cart ({cartState.cartList.length})</p>
        <div className="drawer-container h-[78%] overflow-y-scroll">
          {cartState.cartList.map(eachCartProdct=>{
            return (
              <div key={eachCartProdct.id} className="h-[183px] border border-[black] flex mb-[10px]">
                <CartProduct currentCartProduct={eachCartProdct}/>
              </div>
            );
          })}
        </div>
        <div className="drawer-footer flex items-center justify-between">
          <div className="left">
            <p className='text-[30px] font-semibold'>Subtotal:</p>
            <p className='text-[30px] font-semibold'>{convertNumber(cartState.subTotal)}.00 Php</p>
          </div>
          <button className="border-2 border-solid border-[black] py-[10px] px-[20px] text-[20px] hover:bg-black hover:text-white transition-[0.5s] duration-[ease]"> Go to Checkout </button>
        </div>
      </div>
    </div>
  );
}