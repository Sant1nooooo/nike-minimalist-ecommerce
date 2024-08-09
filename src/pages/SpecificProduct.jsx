import { convertNumber } from "../utils/helperFunction";
import { handleAddToCart } from "../utils/action";
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../utils/action";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import { useEffect, useRef, createRef } from "react";
import TrendingProducts from "../components/TrendingProducts";
export function loader({ params })
{
  return getProduct(params.productID);
}

export default function Product(){
  const currentProduct = useLoaderData();
  const [subPrice, setSubPrice] = useState(currentProduct.price);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const subImageElements = useRef([]);
  const mainImage = useRef();
  
  useEffect(()=>{
    function handleMouseOver(event){
      mainImage.current.src = event.currentTarget.getAttribute('src');
    };

    function handleMouseLeave(){
      mainImage.current.src = currentProduct.image;
    };

    subImageElements.current.forEach((eachImage) => {
        eachImage.current.addEventListener('mouseover', handleMouseOver);
        eachImage.current.addEventListener('mouseleave', handleMouseLeave);
    });


    //Add cleanup function inside thios useEffect if memory leaks or unusual behavior happens.
  },[])
  function handleIncreasePrice(){
    setSubPrice(prevValue => prevValue + currentProduct.price);
    setQuantity(prevValue => prevValue + 1);
  }
  function handleDecreasePrice(){
    if(quantity > 1)
    {
      setSubPrice(prevValue => prevValue - currentProduct.price);
      setQuantity(prevValue => prevValue - 1);
    }
  }
  return(
    <div className="specific-product-section pt-[100px] px-[10px]">
      <div className="container sm:relative static max-w-[1300px] flex mx-auto mb-[150px] lg:flex-row flex-col items-center justify-center">
        <div className="image-container xl:w-[50%] lg:mb-0 mb-[20px] lg:h-[750px] md:h-[850px] sm:h-[700px] h-[600px] mr-[10px] sm:static relative flex">
          <div className="sm:block hidden sub-image-container w-[75px] mr-[5px]">
            {currentProduct.subImages.map((eachSubImage, index) =>{
              if (!subImageElements.current[index]) 
              {
                subImageElements.current[index] = createRef();
              }
              return <img ref={subImageElements.current[index]} key={index} src={eachSubImage} alt="" style={{ height: '85px', width: '100%' }} className="mb-[10px] rounded-[10px] hover:brightness-75 z-[998]"/>

            })}
          </div>
          <div className="flex-grow">
            <img ref={mainImage} src={currentProduct.image} alt="" style={{ height: '100%', width:'100%' }} className="rounded-[10px]"/>
          </div>
          <p className='specific-product-title sm:left-2/4 sm:-translate-x-2/4  sm:top-[5px] sm:tracking-normal tracking-[5px] left-0 specific-product-title absolute mx-auto text-[40px] top-[20%] font-bold text-white'> {currentProduct.name} </p>
        </div>
        <div className="details-container bg-[#EFECEC] xl:w-[50%] lg:w-[45%] w-full h-[100%] min-h-[750px] px-[50px] flex items-center justify-center flex-col rounded-[10px]">
          <p className='text-[20px] text-center mb-[70px]'> {currentProduct.description} </p> 
          <div className="controls flex items-center justify-between w-[100%] mb-[130px] sm:flex-row flex-col text-[25px]">
            <p className='font-semibold  xl:mb-0 mb-[20px]'>Quantity</p>
            <div className="buttons flex xl:mb-0 mb-[20px]">
              <button onClick={handleDecreasePrice} className='px-[25px] py-[10px] bg-white border-2 border-solid border-[black] font-semibold  hover:bg-[rgb(239,236,236)]'> - </button>
              <p className='px-[25px] py-[10px] bg-white border-y-2 border-y-[black] border-solid font-semibold '> {quantity}</p>
              <button onClick={handleIncreasePrice} className='px-[25px] py-[10px] bg-white border-2 border-solid border-[black] font-semibold  hover:bg-[rgb(239,236,236)]'> + </button>
            </div>
            <p className=' font-semibold'> {convertNumber(subPrice)}.00 Php</p>
          </div>
          <div className="actions flex w-[100%]">
            <button onClick={()=>{
              setSubPrice(currentProduct.price);
              setQuantity(1);
              handleAddToCart(dispatch, currentProduct, subPrice, quantity) 
            }}
              className='font-semibold text-[20px] py-[20px] w-[50%] bg-transparent border-2 border-solid border-[black] hover:bg-black hover:text-white mr-[10px]'> ADD TO CART </button>
            <button className='font-semibold text-[20px] py-[20px] w-[50%] border-2 border-solid border-[red] bg-red-500 text-white hover:bg-white hover:text-black'> BUY NOW </button>
          </div>
        </div>
        {/* <p className='sm:left-2/4 left-0 specific-product-title absolute mx-auto text-[40px] -translate-x-2/4  top-[5px] font-bold text-white '> {currentProduct.name} </p> */}
      </div>
      <TrendingProducts/>
    </div>
  );
}