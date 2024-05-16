import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import SingleItem from "../pages/shop/SingleItem";

import About from "../components/About";
import Blog from "../components/Blog";
import AddCustomer from "../components/AddCustomer"
import CustomerSignin from "../components/CustomerSignin"
import AddEmployee from "../components/AddEmployee"
import AllEmployees from "../components/AllEmployees";
import EditEmployee from "../components/EditEmployee";
import DeleteEmployee from "../components/DeleteEmployee";
import Purchers from "../components/Purches";
import ReviewPops from "../components/ReviewPops";




import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import UploadItem from "../pages/dashboard/UploadItem";
import ManageItems from "../pages/dashboard/ManageItems";
import UpdateItems from "../pages/dashboard/UpdateItems";
import SuppliersManage from "../pages/dashboard/SuppliersManage";
import AddSupplier from "../pages/dashboard/AddSupplier";
import UpdateSupplier from "../pages/dashboard/UpdateSupplier";
import CusVal from "../components/cusVal";
import Register from "../components/register";




 



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path:"/Sign-up",
        element: <CusVal/>
      },
      {
        path:"/Sign-up/normal",
        element:<AddCustomer/>
      },
      {
        path:"Sign-up/previledge",
        element:<Register/>
      },
      {
        path: "/Items/get/:id",
        element: <SingleItem/>,
        loader: ({ params }) => 
       fetch(`http://localhost:8090/Items/get/${params.id}`) 
  
      },
      {
        path:"/reviewSetup",
        element:<Purchers/>
      },
      {
        path:"/customer",
        element:<CusVal/>,
      },
       
      {
        path:"/customer/login",
        element:<CustomerSignin/>

      }  



      
    ]
  },
  {
    path: "/admin/dashboard",
    element:<DashboardLayout/>,
    children: [
      {
        path:"/admin/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/admin/dashboard/upload",
        element:<UploadItem/>
      },
      {
        path:"/admin/dashboard/manage",
        element:<ManageItems/>
      },
      {
        path:"/admin/dashboard/Update/:id",
        element:<UpdateItems/>,
        loader: ({ params }) => fetch(`http://localhost:8090/Items/update/${params.id}`)
      },
      {
        path:"/admin/dashboard/suppliers",
        element:<SuppliersManage/>
      },
      {
        path:"/admin/dashboard/suppliers/add",
        element:<AddSupplier/>
      },
      {
        path:"/admin/dashboard/suppliers/update/:supplierNIC",
        element:<UpdateSupplier/>,
        loader: ({ params }) => fetch("http://localhost:8090/Suppliers/update/:id")
      },
      {
        path:"/admin/dashboard/employee/",
        element:<AllEmployees/>
      },
      {
        path:"/admin/dashboard/employee/add",
        element:<AddEmployee/>
      },
      {
        path:"/admin/dashboard/employee/update/:id",
        element:<EditEmployee/>
      },
      {
        path:"/admin/dashboard/employee/delete/:id",
        element:<DeleteEmployee/>
      },   
     ]
  },

{
  path:"/addReview",
  element:<ReviewPops/>
}


]);


export default router;