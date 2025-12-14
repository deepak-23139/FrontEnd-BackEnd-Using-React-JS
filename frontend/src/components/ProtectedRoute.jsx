import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({redirectPath = "/"}) => {

    const isAuthenticated = localStorage.getItem("token");

    if(!isAuthenticated){
        return <Navigate to={redirectPath} replace />
    }


    return <Outlet/>
  
}

export default ProtectedRoute