import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./src/components/Contact_us.js";
import Error from "./src/components/Error.js";
import Resturant from "./src/components/Resturant.js";
import Aboutus from "./src/components/Aboutus.js";

const App = ()=>{
  return (<div className="app">
    <Heading/>
    <Outlet/>  
  </div>)
}
 
const Route = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contactus",
        element: <Contact/>
      },
      {
        path:"/resturant/:resid",
        element:<Resturant/>
      },
      {
        path:"/aboutus",
        element:<Aboutus/>
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Route}/>);
