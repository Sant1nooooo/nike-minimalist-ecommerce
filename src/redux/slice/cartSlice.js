import { createSelector } from "reselect";

const initialData = {
  subTotal: 0,
  cartList:[
  ]
}

export default function cartReducer(state = initialData, action)
{
  switch(action.type){
    case 'cart/addProduct': {
      //payload: {id, imgURL, name, totalPrice, quantity, originalPrice} If new

      const isExisting = state.cartList.find(eachProduct => eachProduct.id == action.payload.id);
      if(isExisting)
      {
        console.log('Product is already existing.');
        return { subTotal: state.subTotal + action.payload.totalPrice,
          cartList: state.cartList.map(eachProduct => {
            if(eachProduct.id == action.payload.id)
            {
              return {...eachProduct, totalPrice: eachProduct.totalPrice + action.payload.totalPrice, quantity: eachProduct.quantity + 1};
            }
            return eachProduct;
          })
        }
      }

      return { subTotal: state.subTotal + action.payload.totalPrice, 
        cartList:[...state.cartList, 
          { id: action.payload.id, 
            image: action.payload.image, 
            name: action.payload.name, 
            totalPrice: action.payload.totalPrice, 
            quantity: action.payload.quantity, 
            originalPrice: action.payload.originalPrice }
        ]
      }
    }
    case 'cart/removeProduct': {
      // console.log('cartSlice:', action.payload);
      const currentProduct = state.cartList.find(eachProduct => eachProduct.id == action.payload.id);
      return { 
        subTotal: state.subTotal - currentProduct.totalPrice, 
        cartList: state.cartList.filter(eachProduct => eachProduct.id !== currentProduct.id)
      }
    } 
    case 'cart/increaseQuantity': {
      //payload: {id}
      const currentProduct = state.cartList.find(eachProduct => eachProduct.id === action.payload.id);
      return { 
        subTotal: state.subTotal + currentProduct.originalPrice, 
        cartList: state.cartList.map(eachProduct =>{
          if(eachProduct.id === action.payload.id)
          {
            return { ...eachProduct, totalPrice: eachProduct.totalPrice + currentProduct.originalPrice, quantity: eachProduct.quantity + 1 }
          }
          return eachProduct
        })
      }
    }
    case 'cart/decreaseQuantity': {
      const currentProduct = state.cartList.find(eachProduct => eachProduct.id === action.payload.id);
      return { 
        subTotal: state.subTotal - currentProduct.originalPrice, 
        cartList: state.cartList.map(eachProduct =>{
          if(eachProduct.id === action.payload.id)
          {
            return { ...eachProduct, totalPrice: eachProduct.totalPrice - currentProduct.originalPrice, quantity: eachProduct.quantity - 1 }
          }
          return eachProduct
        })
      }
    }
    default: 
      return state;
  }
}

export const cartProductID = createSelector(
  [state => state.cart.cartList],

  (cartList) => {
    const idList =  cartList.map(eachCartProduct => {
      return eachCartProduct.id
    })
    // console.log('cartSlicem',idList);
    return idList;
  }
)