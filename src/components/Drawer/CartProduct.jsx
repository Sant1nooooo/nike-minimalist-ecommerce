import { handleRemoveCartProduct, handleIncreaseQuantity, handleDescreaseQuantity } from "../../utils/action";
import { convertNumber } from "../../utils/helperFunction";
import trashIcon from '../../assets/trash.svg'
import { useDispatch } from "react-redux";
import { memo } from "react";
function CartProduct({ currentCartProduct }){
  const dispatch = useDispatch();
  // console.log('Re-rendering',currentCartProduct.name,'because its state changed');
  return(
    <>
      <div className="img-container h-[100%] w-[30%]">
        <img src={currentCartProduct.image} alt="" style={{ width: '100%', height: '100%' }}/>
      </div>
      <div className="grow p-[10px] flex items-center justify-between flex-col">
        <div className="details-header flex items-center justify-between w-[100%]">
          <p className="text-[20px]">{currentCartProduct.name}</p>
          <p className="text-[20px]">{convertNumber(currentCartProduct.totalPrice)}.00 Php</p>
        </div>
        <div className="details-buttons flex items-center justify-between w-[100%]">
          <div className='flex'>
            <button onClick={()=>{
                if(currentCartProduct.quantity > 1)
                {
                  handleDescreaseQuantity(dispatch, currentCartProduct.id)
                }
              }} className='bg-black text-white py-[5px] px-[15px]'>-</button>
            <p className='border-1 border-solid border-[black] py-[5px] px-[15px]'> {currentCartProduct.quantity} </p>
            <button onClick={()=>{handleIncreaseQuantity(dispatch, currentCartProduct.id)}} className='bg-black text-white py-[5px] px-[15px]'>+</button>
          </div>
          <button onClick={()=>{handleRemoveCartProduct(dispatch, currentCartProduct.id)}}>
            <img src={trashIcon} alt="" height={20} width={20}/>
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(CartProduct)