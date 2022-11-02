import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

export const AdminRoute = ()=> {
    return(
       isAuthenticated() && isAuthenticated().role === 1 ?
       <Outlet/>:<Navigate to='/signin'/>
    )
}
export const UserRoute = ()=> {
    return(
       isAuthenticated() && isAuthenticated().role === 0 ?
       <Outlet/>:<Navigate to='/signin'/>
    )
}

