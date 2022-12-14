import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup"
import PrivateRotue from "../PrivatRoute/PrivateRotue";
const  router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>, 
      children: [ 
        {
            path: '/', 
            element: <Home></Home>
        },{
          path: '/login',
          element: <Login></Login>
        }, {
          path: '/signup', 
          element: <Signup></Signup>
        }, {
          path: '/checkout/:id',
          element: <PrivateRotue>  <CheckOut></CheckOut></PrivateRotue>,
          loader: ({params})=>  fetch(`http://localhost:5000/services/${params.id}`)
        }, 
        {
          path: '/orders',
          element:<PrivateRotue> <Orders></Orders></PrivateRotue>
        }
      ]
    }
  ])
export default router ;