import { Link } from "react-router-dom";
export default function Banner()
{
  return(
    <div className="banner-section mb-[150px] px-[10px]">
      <div className="container max-w-[1200px] mx-auto bg-white flex md:flex-row flex-col bg-pink-100">
        <div className="image-container h-[400px] md:w-[50%] w-full">
          <img src="./src/assets/lebron-james.png" alt="" style={{height: '100%', width: '100%'}}/>
        </div>
        <div className="details-container w-[50%] bg-[#e9e9e9] md:flex hidden items-center justify-center flex-col">
          <p className="text-[50px] text-center">GREATNESS IS <br/> BORN, IT IS MADE!</p>
          <p className="text-[16px] mb-[25px]">Step into the new year with a wradrobe refresh that brings<br/>
          out your best personal style. Shop our new collection now!</p>
          <Link to="#" className="bg-black text-white px-[20px] py-[10px] cursor-pointer">SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
}