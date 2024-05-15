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


import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import UploadItem from "../pages/dashboard/UploadItem";
import ManageItems from "../pages/dashboard/ManageItems";
import UpdateItems from "../pages/dashboard/UpdateItems";
import SuppliersManage from "../pages/dashboard/SuppliersManage";
import AddSupplier from "../pages/dashboard/AddSupplier";
import UpdateSupplier from "../pages/dashboard/UpdateSupplier";

 



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
        path: "/Items/get/:id",
        element: <SingleItem/>,
        loader: ({ params }) => 
       fetch(`http://localhost:8090/Items/get/${params.id}`) 
  
      },
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
        loader: ({ params }) => fetch(`http://localhost:8090/Suppliers/update/${params.supplierNIC}`)
      },



    ]
  }
]);

export default router;