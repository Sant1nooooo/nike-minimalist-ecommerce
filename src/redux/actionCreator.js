export function changeFilter(newFilter)
{
  return { type: 'filter/changeFilter', payload: { filter: newFilter } }
}

export function addProduct(currentProduct, subPrice, quantity)
{
  // console.log(currentProduct.image);
  return {
    type: 'cart/addProduct',
    payload: {
      id: currentProduct.id, 
      image: currentProduct.image, 
      name: currentProduct.name, 
      totalPrice: subPrice, 
      quantity: quantity, 
      originalPrice: currentProduct.price
    }
  };
}

export function removeCartProduct(id)
{
  return {type:'cart/removeProduct', payload: {id: id}}
}
export function increaseQuantity(id)
{
  return {type:'cart/increaseQuantity', payload: {id: id}}
}
export function decreaseQuantity(id)
{
  return {type:'cart/decreaseQuantity', payload: {id: id}}
}