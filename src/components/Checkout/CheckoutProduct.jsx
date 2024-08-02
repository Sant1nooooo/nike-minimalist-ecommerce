import { handleRemoveCartProduct, handleIncreaseQuantity, handleDescreaseQuantity } from "../../utils/action";
import { convertNumber } from "../../utils/helperFunction";
import { memo } from "react";
import { useDispatch } from "react-redux";
function CheckoutProduct({checkoutProduct}){
  const dispatch = useDispatch();
  console.log(checkoutProduct);
  return(
    <>
      <img src={`${checkoutProduct.image}`} alt="" style={{height: '100%', width:'150px'}}/>
      <div className="h-full w-[200px] flex items-center">
        <p className="text-[20px] font-semibold">{checkoutProduct.name}</p>
      </div>
      <div className="flex items-center">
        <button className="text-[25px] mr-[20px]" onClick={()=>{
          if(checkoutProduct.quantity > 1)
          {
            handleDescreaseQuantity(dispatch, checkoutProduct.id)
          }
        }}>-</button>
        <p className="mr-[20px] text-[25px] border-[1px] border-solid border-[lightgray] px-[20px] rounded">{checkoutProduct.quantity}</p>
        <button className="text-[25px]"  onClick={()=>{handleIncreaseQuantity(dispatch, checkoutProduct.id)}}>+</button>
      </div>
      <p className="text-[25px]">{convertNumber(checkoutProduct.totalPrice)}.00 Php</p>
      <button onClick={()=>{handleRemoveCartProduct(dispatch, checkoutProduct.id)}}>
        <img src="/assets/trash.svg" alt="" height={25} width={25}/>
      </button>
    </>
  );
}

export default memo(CheckoutProduct)