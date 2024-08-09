import { handleLogin as loginAction, handleSignUp as signUpAction } from './utils/action.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import SpecificProduct, {loader as specificProductLoader} from './pages/SpecificProduct.jsx'
import Categories from './pages/Categories.jsx';
import Index from './components/Home/Index.jsx';
import Register from './pages/Register.jsx';
import Checkout from './pages/Checkout.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

import ReactDOM from 'react-dom/client';
import  store  from './redux/store.js';
import { Provider } from 'react-redux';
import React from 'react';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <Home/>, children:[
    { index: true, element: <Index/> },
    { path: '/categories', element: <Categories/>},
    { path: '/categories/:productID', element: <SpecificProduct/>, loader: specificProductLoader},
    { path: '/checkout', element: <Checkout/>},
  ]},
  { path: '/login', element: <Login/>, action: loginAction },
  { path: '/signUp', element: <Register/>, action: signUpAction },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

);