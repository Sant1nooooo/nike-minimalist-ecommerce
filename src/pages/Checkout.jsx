import CheckoutProduct from "../components/Checkout/CheckoutProduct";
import { convertNumber } from "../utils/helperFunction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Checkout(){
  const cartState = useSelector(state => state.cart);
  const navigate = useNavigate();
  
  const sessionAcccount = JSON.parse(sessionStorage.getItem('account'));
  const {email, firstName, lastName, password} = sessionAcccount;
  const [cardNumber, setCardNumber] = useState("8888 8888 8888 8888");
  const [cardName, setCardName] = useState(`${firstName[0].toUpperCase() + firstName.substring(1, firstName.length)} ${lastName[0].toUpperCase() + lastName.substring(1, lastName.length)}`);

  return(
    <div className="max-w-[1500px] xl:mx-auto mx-[20px] mt-[50px] flex rounded-2xl overflow-hidden mb-[100px] shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-[2px]">
      <div className="left w-[60%] px-[25px] py-[50px] flex flex-col">
        <div className="header">
          <p className="text-[30px] font-semibold mb-[40px]">Shopping Cart</p>
        </div>
        <div className="content h-[500px] overflow-y-scroll mb-[25px]">
          {cartState.cartList.map((eachProduct)=>{
            return(
              <div key={eachProduct.id} className="w-full h-[200px] flex items-center justify-between border-b-[lightgray] border-b border-solid pb-[20px] mb-[20px]">
                <CheckoutProduct checkoutProduct={eachProduct}/>
              </div>
            );
          })}
        </div>
        <div className="footer flex items-center justify-between">
          <Link to="/categories" className="flex items-center justify-center text-[25px]">
            <img src="./src/assets/left-chevron.png" alt="left-arrow" height={30} width={30}/> Continue Shopping
          </Link>
          <div className="flex items-center justify-center">
            <p className="text-[#808080] text-[20px] mr-[8px]">Subtotal:</p>
            <p className="text-[30px]">{convertNumber(cartState.subTotal)}.00Php</p>
          </div>
        </div>
      </div>
      <div className="right w-[40%] bg-[#f6f3f3] py-[50px] px-[50px]">
        <p className="flex items-center text-[25px] mb-[50px]">
          <img src="./src/assets/left-chevron.png" alt="left-arrow" height={30} width={30} className="mr-[10px]"/> Card Details
        </p>
        <div className="credit-card w-[70%] rounded-2xl bg-white overflow-hidden py-[35px] px-[25px] text-white mx-auto mb-[50px] relative">
          <p className="mb-[20px]">{cardNumber}</p>
          <p className="mb-[20px]">09/27</p>
          <p>{cardName}</p>
          <img src="./src/assets/mastercard.png" alt="mastercard-logo" height={70} width={70} className="absolute bottom-[10px] right-[30px]"/>
        </div>

        <p className="text-[15px] text-[#808080]">Name on card</p>
        <input type="text" onChange={(e)=>{setCardName(e.target.value)}} placeholder={`${firstName[0].toUpperCase() + firstName.substring(1, firstName.length)} ${lastName[0].toUpperCase() + lastName.substring(1, lastName.length)}`} className="bg-transparent text-[15px] mb-[20px] border-b-[gray] border-b border-solid w-full"/>

        <p className="text-[15px] text-[#808080]">Card Number</p>
        <input type="text" onChange={(e)=>{setCardNumber(e.target.value)}} placeholder="8888 8888 8888 8888" className="bg-transparent text-[15px] mb-[20px] border-b-[gray] border-b border-solid w-full"/>

        <p className="text-[15px] text-[#808080]">CSV Code</p>
        <input type="text" placeholder="123" className="bg-transparent text-[15px] mb-[50px] border-b-[gray] border-b border-solid w-full"/>

        <button className="w-full text-[20px] text-white py-[15px] bg-[#363636] rounded-2xl border-solid border-2 hover:border-black hover:bg-white hover:text-black transition-all duration-[1]"> PAY NOW</button>
      </div>
    </div>
  );
}