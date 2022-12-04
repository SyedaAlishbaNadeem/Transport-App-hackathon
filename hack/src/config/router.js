import React from "react";
import Home from "../screens/home";
import Sign from "../screens/sign";
import Login from "../screens/login";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Students from "../screens/dashboardScreens/transportUsers";
import ResponsiveDrawer from "../screens/dashboardScreens/drawer";
import StdProfile from "../screens/stdProfile";
import Bookingforms from "../screens/bookingforms";






export default function AppRouter() {
  return (
    <div>
      
      <Router>
        <Link to="/"> </Link>
        <Link to="sign">  </Link>
        <NavLink to="login"> </NavLink>
        <Link to="drawer"></Link>
        <Link to="stdProfile"></Link>
  
     
    


        <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="sign" element={<Sign/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="drawer/*" element={<ResponsiveDrawer/>}/>
          <Route path = "stdProfile" element={<StdProfile/>}/>
        </Routes>


      </Router>
    </div>
  );
}

