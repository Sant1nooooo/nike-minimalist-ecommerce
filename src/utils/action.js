import { removeCartProduct, increaseQuantity, decreaseQuantity,changeFilter, addProduct } from "../redux/actionCreator";

import { redirect } from "react-router-dom";
import { products } from "../data/storage";
import localforage from "localforage";
//Login and Register Functions
export async function handleLogin({ request })
{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  let users = await localforage.getItem("users");

  if(!users) return { message: 'User does not exist! Please create an account first.' }
  

  let currentUser = users.find(eachUser => eachUser.email === data.email);
  if(!currentUser) return { message: 'Email does not exist!' }
  if(currentUser.password !== data.password) return { message: 'Incorrect Password!'}
  
  
  let sessionAccount = JSON.stringify({'email': currentUser.email, 'firstName':currentUser.firstName, 'lastName':currentUser.lastName, 'password': currentUser.password})
  sessionStorage.setItem('account', sessionAccount); 
  return redirect('/');

}
export async function handleSignUp({ request })
{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  let users = await localforage.getItem("users");
  if(!users) users = [];

  console.log(users)
  let isExisting = users.find(eachUser => eachUser.email === data.email)
  if(isExisting) return { message: 'Email is already axisting!' }

  if(data.password !== data.confirmPassword)
  {
    return { message: 'Password does not match!'}
  }
  users.push({email: data.email, password: data.password, firstName: data.firstName, lastName: data.lastName});
  await localforage.setItem('users', users);

  return redirect('/login')
}


//Events Functions
export function handleChangeFilter(dispatch, newFilter)
{
  dispatch(changeFilter(newFilter))
}

export function handleAddToCart(dispatch, currentProduct, subPrice, quantity){
  dispatch(addProduct(currentProduct, subPrice, quantity));
}

export function handleRemoveCartProduct(dispatch, id)
{
  dispatch(removeCartProduct(id))
}
export function handleIncreaseQuantity(dispatch, id)
{
  dispatch(increaseQuantity(id))
}
export function handleDescreaseQuantity(dispatch, id)
{
  dispatch(decreaseQuantity(id))
}


//Getter Function
export function getProduct(id)
{
  return products.find(eachProduct => eachProduct.id.toString() === id);
}
