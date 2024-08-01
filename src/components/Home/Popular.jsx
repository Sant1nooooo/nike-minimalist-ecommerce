import { convertNumber } from "../../utils/helperFunction";
import {products} from '../../data/storage'
import { Link } from "react-router-dom";
export default function Popular()
{
  return(
    <div className="popular-products-section mb-[150px] px-[10px]">
      <div className="container max-w-[1570px] mx-auto">
        <p className='text-[25px] font-semibold mb-[25px]'>Popular Right Now!</p>
        <div className={`grid xl:grid-rows-[500px_500px] lg:grid-rows-[450px_450px] md:grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr] max-w-[1500px] gap-[10px]`}>
          { products.map(eachProduct=>{
            if(eachProduct.isPopular){
              return(
                <Link key={eachProduct.id} to={`/categories/${eachProduct.id}`}>
                  <div key={eachProduct.id} className="popular-product border border-gray-300 border-2 hover:border-black hover:text-white h-full">
                    <div className="product-image xl:h-[85%] lg:h-[80%]">
                      <img src={"" + eachProduct.image} alt="" style={{ height: '100%', width:'100%' }}/>
                    </div>
                    <div className="product-details xl:h-[15%] lg:h-[20%] p-[10px]">
                      <p className="xl:text-[22px] text-[18px]">{eachProduct.name} </p>
                      <p className="text-[22px] font-semibold">{ convertNumber(eachProduct.price) }.00 Php</p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}