import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body.js";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./src/components/Contact_us.js";
import Error from "./src/components/Error.js";
import userCon from "./src/utils/userContext.js";
import Resturant from "./src/components/Resturant.js";
import { Provider } from "react-redux";
import appstore from "./src/utils/appstore.js";
import Cart from "./src/components/Cart.js";

const Aboutus = lazy(()=> import("./src/components/Aboutus.js"));
const App = ()=>{
  const [username,setuser] = useState("monu");
  return (
    <Provider store={appstore}>
  <div className="app">
    <userCon.Provider value={{name:username}}>
    <Heading/>
    <Outlet/> 
    </userCon.Provider>
  </div>
  </Provider>)
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
        element:<Suspense fallback={<h1>Loading...</h1>}><Aboutus/></Suspense>
      },
      {
         path:"/Cart",
         element:<Cart/>,
      },
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Route}/>);
