import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  { path: '/', element: <App/>, 
    children:[
      { path: '/categories' },
      { path: '/:productID' },
      { path: '/checkout' },
    ]
  },
  { path:'/login' },
  { path:'/signUp' }
]);

export default router;