import { products } from "../data/storage";
import { convertNumber } from "../utils/helperFunction";
import { Link } from "react-router-dom";
export default function TrendingProducts()
{
  console.log()
  return (
    <div className="trending-products-section mb-[150px] px-[10px]">
      <div className="max-w-[1500px] mx-auto">
        <p className='text-[23px] font-semibold mb-[25px]'>Trending Now</p>
        <div className="carousel-container flex overflow-x-scroll">
        {products.map(eachProduct => {
          if(eachProduct.isTrending)
          {
            return(
              <Link key={eachProduct.id} to={`/categories/${eachProduct.id}`}>
                <div className="h-[380px] w-[250px] border-2 border-solid border-[lightgray] flex-shrink-0 mr-[10px]">
                  <div className="image-container h-[80%]">
                    <img src={eachProduct.image} alt="" style={{height: '100%', width:'100%'}}/>
                  </div>
                  <div className="pl-[10px] pt-[10px] h-[20%]">
                    <p>{eachProduct.name}</p>
                    <p className='text-[20px]'>{convertNumber(eachProduct.price)}.00 Php</p>
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