import { products } from "../../data/storage";
import { createSelector } from "reselect";
const initialData = { currentFilter: 'all' };

export default function filterReducer(state=initialData, action)
{
  switch(action.type)
  {
    case 'filter/changeFilter':{
      return {currentFilter: action.payload.filter}
    }
    default:
      return state;
  }
}





export const filteredProducts = createSelector(
  [state => state.filter.currentFilter],

  (currentFilter) => {
    if(currentFilter === 'all')
    {
      return products;
    }
    //hoodie, pants, shoes, shorts, bag, shirts
    const idList =  products.filter(eachProduct => {
      if(eachProduct.type === currentFilter){
        return eachProduct.id
      }
    })
    return idList
  }
)