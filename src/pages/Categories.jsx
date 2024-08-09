import { filteredProducts } from "../redux/slice/filterSlice";
import { convertNumber } from "../utils/helperFunction";
import { useSelector, useDispatch } from 'react-redux';
import { handleChangeFilter } from "../utils/action";
import { Link } from "react-router-dom";
export default function Categories(){
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter.currentFilter);
  const products = useSelector(filteredProducts);
  
  return (
    <div className="categories pt-[60px] pb-[100px] px-[10px]">
      <div className="container max-w-[1500px] bg-white mx-auto">
        <div className="header mb-[75px]">
          <div className="flex mb-[60px]">
            <div className="flex items-center justify-center">
              <img src="./src/assets/backward.png" alt="" height={20} width={20} className='mr-[2px]'/>
              <p className='text-[16px]'>Home</p>
            </div>
            <p className="grow text-center text-[25px] font-bold">ALL</p>
          </div>
          <div className="filter flex items-center justify-center flex-wrap">
            <button onClick={()=>{handleChangeFilter(dispatch, 'all')}} className={`text-[15px] border-solid border-2 border-[rgb(188,183,183)] py-[3px] px-[10px] mr-[20px] cursor-pointer hover:border-black mb-[10px] ${currentFilter == 'all' ? 'bg-gray-500 border-black text-white' : ''}` }>ALL</button>
            <button onClick={()=>{handleChangeFilter(dispatch, 'hoodies')}} className={`text-[15px] border-solid border-2 border-[rgb(188,183,183)] py-[3px] px-[10px] mr-[20px] cursor-pointer hover:border-black mb-[10px] ${currentFilter == 'hoodies' ? 'bg-gray-500 border-black text-white' : ''}` }>HOODIES & SWEATSHIRTS</button>
            <button onClick={()=>{handleChangeFilter(dispatch, 'pants')}} className={`text-[15px] border-solid border-2 border-[rgb(188,183,183)] py-[3px] px-[10px] mr-[20px] cursor-pointer hover:border-black mb-[10px] ${currentFilter == 'pants' ? 'bg-gray-500 border-black text-white' : ''}` }>PANTS & LEGGINGS</button>
            <button onClick={()=>{handleChangeFilter(dispatch, 'shoes')}} className={`text-[15px] border-solid border-2 border-[rgb(188,183,183)] py-[3px] px-[10px] mr-[20px] cursor-pointer hover:border-black mb-[10px] ${currentFilter == 'shoes' ? 'bg-gray-500 border-black text-white' : ''}` }>SHOES</button>
            <button onClick={()=>{handleChangeFilter(dispatch, 'shorts')}} className={`text-[15px] border-solid border-2 border-[rgb(188,183,183)] py-[3px] px-[10px] mr-[20px] cursor-pointer hover:border-black mb-[10px] ${currentFilter == 'shorts' ? 'bg-gray-500 border-black text-white' : ''}` }>SHORTS</button>
            <button onClick={()=>{handleChangeFilter(dispatch, 'bag')}} className={`text-[15px] border-solid border-2 border-[rgb(188,183,183)] py-[3px] px-[10px] mr-[20px] cursor-pointer hover:border-black mb-[10px] ${currentFilter == 'bag' ? 'bg-gray-500 border-black text-white' : ''}` }>BAGS</button>
            <button onClick={()=>{handleChangeFilter(dispatch, 'shirts')}} className={`text-[15px] border-solid border-2 border-[rgb(188,183,183)] py-[3px] px-[10px] mr-[20px] cursor-pointer hover:border-black mb-[10px] ${currentFilter == 'shirts' ? 'bg-gray-500 border-black text-white' : ''}` }>TOPS & SHIRTS</button>
          </div>
        </div>
        <div className="content flex items-center justify-center flex-wrap">
          {products.map(eachProduct=>{
            return(
              <Link key={eachProduct.id} to={`/categories/${eachProduct.id}`}>
                <div key={eachProduct.id} className="popular-product w-[280px] h-[400px] mr-[10px] mb-[10px] border border-gray-300 border-2 cursor-pointer hover:border-black hover:text-white">
                  <div className="product-image h-[85%]">
                    <img src={"" + eachProduct.image} alt="" style={{ height: '100%', width:'100%' }}/>
                  </div>
                  <div className="product-details h-[15%] pl-[10px]">
                    <p className="text-[18px]">{eachProduct.name} </p>
                    <p className="text-[18px] font-semibold">{ convertNumber(eachProduct.price) }.00 Php</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}