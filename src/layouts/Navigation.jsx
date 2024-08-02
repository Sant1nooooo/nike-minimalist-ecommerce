import CartProduct from "../components/Drawer/CartProduct";
import { cartProductID } from "../redux/slice/cartSlice";
import { convertNumber } from "../utils/helperFunction";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";


export default function Navigation()
{
  const cartState = useSelector(state => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  // const idList = useSelector(cartProductID); //FOR DEBUGGING PURPOSES
  const navigationSection = useRef();

  function handleSetIsOpen(){
    setIsOpen(prevValue => !prevValue);
  }

  function handleSetIsNavigationOpen(){
    setIsNavigationOpen(prevValue => !prevValue);
  }
  return(
    <div ref={navigationSection} className="z-[998] navigation-section shadow-[0px_0px_5px_rgba(0,0,0,0.3),0_0_4px_rgba(0,0,0,0.1)_inset] bg-white sticky top-[0px] px-[20px]">
      <div className="bg-white flex items-center justify-between max-w-[1570px] mx-auto">
        <img src="/assets/nike-logo.svg" alt="nike-logo" height={85} width={85}/>
        <div className={`bg-white sm:block ${isNavigationOpen ? 'hidden' : ''} sm:static absolute sm:w-auto w-full left-0 top-full sm:h-auto h-screen`}>
            <ul className="flex sm:flex-row flex-col sm:h-auto h-[90%] items-center">
              <li className="text-[20px] font-medium mr-[50px] sm:mb-0 mb-[100px]">
                <Link to="/" onClick={handleSetIsNavigationOpen}>HOME</Link>
              </li>
              <li className="text-[20px] font-medium mr-[50px] sm:mb-0 mb-[100px]">
                <Link to="/categories" onClick={handleSetIsNavigationOpen}>CATEGORIES</Link>
              </li>
              <li className="w-full flex items-center justify-center">
                <button onClick={()=>{
                   handleSetIsOpen();
                  handleSetIsNavigationOpen();
                  }}>
                  <img src="/assets/cart.svg" alt="" height={26} width={26} className="sm:block hidden"/>
                  <p className="sm:hidden block text-[20px] font-medium mr-[50px] sm:mb-0 mb-[100px]"> CART</p>
                </button>
              </li>
              <li>
                <button onClick={handleSetIsNavigationOpen} className="sm:hidden block text-[20px] font-medium mr-[50px]"> CLOSE </button>
              </li>
            </ul>
          </div>
          <button className="sm:hidden block" onClick={handleSetIsNavigationOpen}>
            <img src="/assets/menu.png" alt="menu-icon" height={35} width={35}/>
          </button>
      </div>
      <div className={`drawer h-screen sm:w-[550px] w-full bg-white absolute top-0 right-0 px-[30px] pt-[50px] pb-[10px] ${isOpen ? 'block' : 'hidden'}`}>
        <button onClick={handleSetIsOpen}>
          <img src="/assets/close.svg" alt="close-button" height={15} width={15}/>
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
          <Link to={'/checkout'} onClick={()=>{setIsOpen(prevValue => !prevValue)}}>
            <p className="border-2 border-solid border-[black] py-[10px] px-[20px] text-[20px] hover:bg-black hover:text-white transition-[0.5s] duration-[ease]"> Go to Checkout </p>
          </Link>
        </div>
      </div>
    </div>
  );
}