import { convertNumber } from "../../utils/helperFunction";
import {products} from '../../data/storage'
export default function Popular()
{
  return(
    <div className="popular-products-section mb-[150px] px-[20px]">
      <div className="container max-w-[1570px] mx-auto">
        <p className='text-[25px] font-semibold mb-[25px]'>Popular Right Now!</p>
        <div className={`grid grid-rows-[550px_550px] grid-cols-[1fr_1fr_1fr_1fr] max-w-[1500px] gap-[10px]`}>
          { products.map(eachProduct=>{
            if(eachProduct.isPopular){
              return(
                <div key={eachProduct.id} className="popular-product border border-gray-300 border-2 cursor-pointer hover:border-black hover:text-white">
                  <div className="product-image h-[85%]">
                    <img src={"" + eachProduct.image} alt="" style={{ height: '100%', width:'100%' }}/>
                  </div>
                  <div className="product-details h-[15%] p-[10px]">
                    <p className="text-[22px]">{eachProduct.name} </p>
                    <p className="text-[22px] font-semibold">{ convertNumber(eachProduct.price) } Php</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}